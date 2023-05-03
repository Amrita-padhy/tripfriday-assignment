import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Users from "./components/Users";
import reportWebVitals from "./reportWebVitals";
import UserDetails from "./components/UserDetails";
import {UserProvider} from "../src/context/userContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Users />,
  },
  { path: "userDetails/:userId/", element: <UserDetails /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
