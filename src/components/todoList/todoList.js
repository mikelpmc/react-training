import React from 'react';

const TodoList = ({ username = 'No user' }) => {
    return (
        <div>
            <h1>{username} ToDo List</h1>
        </div>
    );
};

export default TodoList;
