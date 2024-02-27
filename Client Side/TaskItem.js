import React from 'react';
import axios from 'axios';

const TaskItem = ({ task }) => {
  const handleDelete = () => {
    axios.delete(`/api/tasks/${task._id}`)
      .then(response => {
        console.log(response.data.message);
        // You can implement task deletion from the state here
      })
      .catch(error => {
        console.error('Error deleting task:', error);
      });
  };

  return (
    <li>
      <input type="checkbox" checked={task.completed} />
      <span>{task.title}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
