import React, { useEffect, useState, useRef, HTMLAttributes } from 'react';
import TodoItem from '../todoItem';
import { Todo } from '../types/todo';
import { StyledList } from './todoList.style';

const fakeServerTodosData: Todo[] = [
	{ id: 100, title: 'Learn React' },
	{ id: 101, title: 'Learn TypeScript' }
];

interface TodoListProps extends HTMLAttributes<HTMLDivElement> {
	username?: string;
	children: React.ReactNode;
}

const TodoList = ({ username = 'No user', children, ...rest }: TodoListProps): JSX.Element => {
	const [count, setCount] = useState(0);
	const [todoTitle, setTodoTitle] = useState('');
	const [todos, setTodos] = useState<Todo[]>([]);
	const inputRef = useRef<HTMLInputElement | undefined>();

	useEffect(() => {
		const getFakeServerTodosData = async () => {
			setTodos(fakeServerTodosData);
		};

		getFakeServerTodosData();
	}, []);

	const handleAddTodo = () => {
		if (todoTitle) {
			setCount(count + 1);
			const updatedTodos = [
				...todos,
				{
					id: count,
					title: todoTitle
				}
			];
			setTodos(updatedTodos);
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

			{todos.length ? (
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
