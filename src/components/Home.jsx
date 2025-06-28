import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";

const Home = () => {
  const {
    todo, setTodo, todos, addTodo,
    deleteTodo, editTodo, toggleCheckbox,
    showFinished, setShowFinished
  } = useContext(TodoContext);

  return (
    <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-[35%]">
      <h1 className="font-bold text-center text-3xl mb-5">iTask - Your Todo Hub</h1>

      <div className="flex gap-2">
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          placeholder="Enter your task..."
          className="flex-grow px-4 py-2 rounded-full border-2 border-violet-600"
        />
        <button
          onClick={addTodo}
          disabled={todo.length <= 3}
          className="bg-violet-700 text-white px-4 py-2 rounded-full disabled:opacity-50"
        >
          Add
        </button>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <input
          type="checkbox"
          checked={showFinished}
          onChange={() => setShowFinished(!showFinished)}
        />
        <label>Show Completed</label>
      </div>

      <div className="mt-4 space-y-3">
        {todos.length === 0 && <p>No todos yet!</p>}
        {todos
          .filter(todo => showFinished || !todo.isCompleted)
          .map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-white p-3 rounded shadow">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={item.isCompleted}
                  onChange={() => toggleCheckbox(item.id)}
                />
                <span className={item.isCompleted ? "line-through text-gray-500" : ""}>
                  {item.todo}
                </span>
              </div>
              <div className="flex gap-2">
                <button onClick={() => editTodo(item.id)}>
                  <FaEdit className="text-violet-800" />
                </button>
                <button onClick={() => deleteTodo(item.id)}>
                  <AiFillDelete className="text-red-600" />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
