import React from 'react';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  return (
    <div>
      <h1>Task Manager</h1>
      <AddTaskForm />
      <TaskList />
    </div>
  );
};

export default App;
