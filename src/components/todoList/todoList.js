import React, { useState } from 'react';

const TodoList = ({ username = 'No user', children, ...rest }) => {
    const [count, setCount] = useState(0);
    const [todoTitle, setTodoTitle] = useState('');
    const [todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        setCount(count + 1);
        const updatedTodos = [
            ...todos,
            {
                title: todoTitle,
            },
        ];
        setTodos(updatedTodos);
        setTodoTitle('');
    };

    return (
        <div {...rest}>
            <h1>
                {username} ToDo List - {count}
            </h1>
            <div>
                <input
                    type="input"
                    value={todoTitle}
                    onChange={(ev) => setTodoTitle(ev.target.value)}
                />
                <button type="button" onClick={handleAddTodo}>
                    Add ToDo
                </button>
            </div>

            <ul>
                {todos.map((todo) => (
                    <li>{todo.title}</li>
                ))}
            </ul>

            {children}
        </div>
    );
};

export default TodoList;
