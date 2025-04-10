import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
import Countries from "./countries";

const route = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: '/',
      element: <Countries />
    }
  ]
}])
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={route}/>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
