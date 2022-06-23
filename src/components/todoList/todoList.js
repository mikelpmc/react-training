import React from 'react';

const TodoList = ({ username = 'No user', children, ...rest }) => {
    return (
        <div {...rest}>
            <h1>{username} ToDo List</h1>
            {children}
        </div>
    );
};

export default TodoList;
