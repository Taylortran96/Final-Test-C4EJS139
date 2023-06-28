import React from 'react';

function TodoList({ todos, completeTodo, deleteTodo }) {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id}>
                    <span
                        className={todo.completed ? 'completed' : ''}
                        onClick={() => completeTodo(todo.id)}
                    >
                        {todo.taskName}
                    </span>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
