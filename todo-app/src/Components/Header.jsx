import React, { useState } from 'react';

function Header({ filter, setFilter, addTodo, deleteAllTodos }) {
    const [task, setTask] = useState('');

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() !== '') {
            addTodo(task);
            setTask('');
        }
    };

    const handleFilterChange = (filter) => {
        setFilter(filter);
    };

    return (
        <div className="header">
            <h1>TodoApp</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={task}
                    onChange={handleChange}
                />
                <button type="submit">Add</button>
            </form>
            <div className="tabs">
                <button
                    className={filter === 'all' ? 'active' : ''}
                    onClick={() => handleFilterChange('all')}
                >
                    All
                </button>
                <button
                    className={filter === 'active' ? 'active' : ''}
                    onClick={() => handleFilterChange('active')}
                >
                    Active
                </button>
                <button
                    className={filter === 'complete' ? 'active' : ''}
                    onClick={() => handleFilterChange('complete')}
                >
                    Completed
                </button>
            </div>
            <button className="delete-all" onClick={deleteAllTodos}>
                Delete All
            </button>
        </div>
    );
}

export default Header;
