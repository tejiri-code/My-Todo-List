import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./TodoApp";
import Analytics from '@vercel/analytics';


ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById("root")
);
