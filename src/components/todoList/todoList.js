import React, { useState } from 'react';
import TodoItem from '../todoItem';

const TodoList = ({ username = 'No user', children, ...rest }) => {
    const [count, setCount] = useState(0);
    const [todoTitle, setTodoTitle] = useState('');
    const [todos, setTodos] = useState([]);

    const handleAddTodo = () => {
        setCount(count + 1);
        const updatedTodos = [
            ...todos,
            {
                id: count,
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

            {todos.length ? (
                <ul>
                    {todos.map(({ id, title }) => (
                        <TodoItem key={id} title={title} />
                    ))}
                </ul>
            ) : (
                <p>No ToDos yet! Add some.</p>
            )}

            {children}
        </div>
    );
};

export default TodoList;
