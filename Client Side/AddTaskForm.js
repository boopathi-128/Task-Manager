import React, { useState } from 'react';
import axios from 'axios';

const AddTaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('/api/tasks', {
      title,
      description
    })
      .then(response => {
        console.log(response.data);
        // You can implement task addition to the state here
        setTitle('');
        setDescription('');
      })
      .catch(error => {
        console.error('Error adding task:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={event => setDescription(event.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
