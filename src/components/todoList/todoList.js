import React from 'react';

const TodoList = ({ username = 'No user', children, role, onClick }) => {
    return (
        <div role={role} onClick={onClick}>
            <h1>{username} ToDo List</h1>
            {children}
        </div>
    );
};

export default TodoList;
