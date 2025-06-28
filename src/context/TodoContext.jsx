import React, { createContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) setTodos(JSON.parse(savedTodos));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (todo.length > 3) {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
      setTodo("");
    }
  };

  const deleteTodo = (id) => setTodos(todos.filter(item => item.id !== id));

  const editTodo = (id) => {
    const t = todos.find(item => item.id === id);
    setTodo(t.todo);
    deleteTodo(id);
  };

  const toggleCheckbox = (id) => {
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updated);
  };

  return (
    <TodoContext.Provider
      value={{
        todo, setTodo, todos, addTodo, deleteTodo,
        editTodo, toggleCheckbox, showFinished,
        setShowFinished
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
