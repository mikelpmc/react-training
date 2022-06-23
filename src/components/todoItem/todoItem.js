import React, { useState } from 'react';
import './todoItem.css';

const TodoItem = ({ title }) => {
    const [isDone, setIsDone] = useState(false);

    return (
        <li
            className={isDone ? 'item--done' : ''}
            onClick={() => setIsDone(!isDone)}>
            {title}
        </li>
    );
};

export default TodoItem;
