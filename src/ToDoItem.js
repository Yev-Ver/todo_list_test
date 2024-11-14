import React from 'react';

function ToDoItem({ task, index, toggleComplete, removeTask }) {
  return (
    <div className="todo-item" style={{ textDecoration: task.isCompleted ? 'line-through' : '' }}>
      {task.text}
      <div>
        <button onClick={() => toggleComplete(index)}>
          {task.isCompleted ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => removeTask(index)}>Delete</button>
      </div>
    </div>
  );
}

export default ToDoItem;
