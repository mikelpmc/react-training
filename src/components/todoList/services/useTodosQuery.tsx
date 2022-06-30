import { useEffect, useState } from 'react';
import { Todo } from '@/types/todo';

const fakeServerTodosData: Todo[] = [
	{ id: 100, title: 'Learn React' },
	{ id: 101, title: 'Learn TypeScript' }
];

const useTodosQuery = (): { isLoading: boolean; data: Todo[]; addTodo: (newTodo: Todo) => void } => {
	const [todos, setTodos] = useState<Todo[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getFakeServerTodosData = () => {
			setIsLoading(true);
			setTimeout(() => {
				setTodos(fakeServerTodosData);
				setIsLoading(false);
			}, 2000);
		};

		getFakeServerTodosData();
	}, []);

	const addTodo = (newTodo: Todo) => {
		const updatedTodos = [...todos, newTodo];
		setTodos(updatedTodos);
	};

	return { isLoading, data: todos, addTodo };
};

export default useTodosQuery;
