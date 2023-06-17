import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';

import "./styles.css";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  // Load tasks from LocalStorage on initial render
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to LocalStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Handle task input changes
  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  // Handle task submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskTitle.trim() === "") {
      return;
    }

    const newTask = {
      id: new Date().getTime(),
      title: taskTitle,
      description: taskDescription,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    // Clear task input fields
    setTaskTitle("");
    setTaskDescription("");
  };

  // Handle task deletion
  const handleDelete = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  // Handle toggling task completion status
  const handleToggleStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

 
  return (
    <div>
      <h1>Todo App</h1>
      <hr></hr>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={taskTitle}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={taskDescription}
          onChange={handleDescriptionChange}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleStatus(task.id)}
            />
            <span className={task.completed ? "completed" : ""}>
              {task.title} - {task.description}
            </span>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
        };

export default TodoApp;
