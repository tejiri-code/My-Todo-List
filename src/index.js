import React from "react";
import ReactDOM from "react-dom";
import TodoApp from "./TodoApp";
import Analytics from '@vercel/analytics';

const analytics = Analytics('your-project-id');

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById("root")
);
