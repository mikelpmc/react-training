import React, { useState, useRef, HTMLAttributes } from 'react';
import TodoItem from '../todoItem';
import useTodosQuery from './services/useTodosQuery';
import { StyledList } from './todoList.style';

interface TodoListProps extends HTMLAttributes<HTMLDivElement> {
	username?: string;
	children: React.ReactNode;
}

const TodoList = ({ username = 'No user', children, ...rest }: TodoListProps): JSX.Element => {
	const [count, setCount] = useState(0);
	const [todoTitle, setTodoTitle] = useState('');
	const inputRef = useRef<HTMLInputElement | undefined>();

	const { isLoading, data: todos, addTodo } = useTodosQuery();

	const handleAddTodo = () => {
		if (todoTitle) {
			setCount(count + 1);

			const updatedTodos = {
				id: count,
				title: todoTitle
			};
			addTodo(updatedTodos);

			setTodoTitle('');
			inputRef?.current?.focus();
		}
	};

	return (
		<div {...rest}>
			<h1>
				{username} ToDo List - {count}
			</h1>
			<div>
				<input ref={inputRef} type="input" value={todoTitle} onChange={ev => setTodoTitle(ev.target.value)} />
				<button type="button" onClick={handleAddTodo}>
					Add ToDo
				</button>
			</div>

			{isLoading ? (
				<p>Loading...</p>
			) : todos.length ? (
				<StyledList>
					{todos.map(({ id, title }) => (
						<TodoItem key={id} title={title} />
					))}
				</StyledList>
			) : (
				<p>No ToDos yet! Add some.</p>
			)}

			{children}
		</div>
	);
};

export default TodoList;
