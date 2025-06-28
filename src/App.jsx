import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import RecentTodos from './components/RecentTodos';
import { TodoProvider } from './context/TodoContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/recent",
    element: (
      <>
        <Navbar />
        <RecentTodos />
      </>
    ),
  }
]);

function App() {
  return (
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  );
}

export default App;
