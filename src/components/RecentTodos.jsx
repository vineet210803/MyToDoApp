import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const RecentTodos = () => {
  const { todos } = useContext(TodoContext);
  const recent = [...todos].slice(-3).reverse(); // last 3

  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">Recent Todos</h2>
      {recent.length === 0 ? (
        <p>No recent todos.</p>
      ) : (
        <ul className="space-y-2">
          {recent.map(item => (
            <li key={item.id} className="bg-violet-100 p-3 rounded shadow">
              {item.todo}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecentTodos;
