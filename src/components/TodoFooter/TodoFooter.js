import React from 'react';
import './TodoFooter.css';
import { Link } from 'react-router-dom';

function TodoFooter({ numberOfIncompleteTasks }) {
  return (
    <div className='todo-footer'>
      <p style={{ opacity: 1 }}>
        {numberOfIncompleteTasks} {numberOfIncompleteTasks === 1 ? 'task' : 'tasks'} left
      </p>
      <Link to='/followers'>Followers</Link>
    </div>
  );
}
// it should render 1 task left
// it should render 10 tasks left

export default TodoFooter;
