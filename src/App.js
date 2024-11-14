import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoItem from './ToDoItem';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    if (task) {
      setTasks([...tasks, { text: task, isCompleted: false }]);
    }
  };

  const toggleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].isCompleted = !newTasks[index].isCompleted;
    setTasks(newTasks);
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ToDoForm addTask={addTask} />
      <div className="todo-list">
        {tasks.map((task, index) => (
          <ToDoItem
            key={index}
            index={index}
            task={task}
            toggleComplete={toggleComplete}
            removeTask={removeTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
