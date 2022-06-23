import React from 'react';

const TodoList = ({ username = 'No user', children }) => {
    return (
        <div>
            <h1>{username} ToDo List</h1>
            {children}
        </div>
    );
};

export default TodoList;
