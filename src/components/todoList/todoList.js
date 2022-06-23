import React, { useState } from 'react';

const TodoList = ({ username = 'No user', children, ...rest }) => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div {...rest}>
            <h1>
                {username} ToDo List - {count}
            </h1>
            <button type="button" onClick={handleClick}>
                Add ToDo
            </button>
            {children}
        </div>
    );
};

export default TodoList;
