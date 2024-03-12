import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import About from './pages/About';
import Todo from './pages/Todo';
import Games from './pages/Games';
import Navbar from './components/Navbar';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Navbar/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'games',
        element: <Games/>
      },
      {
        path: 'todo',
        element: <Todo/>
      },
    ]
  },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
