import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Todo } from '@/components/types/todo';

import TodoList from '../todoList';

import useTodosQuery from '../services/useTodosQuery';

jest.mock('../services/useTodosQuery');

const useTodosQueryMocked = useTodosQuery as jest.Mock;

describe('Todo list', () => {
	it('should render the username correctly', () => {
		const fakeTodos: Todo[] = [];
		useTodosQueryMocked.mockImplementation(() => ({ isLoading: false, data: fakeTodos, addTodo: () => {} }));
		const username = 'John Doe';

		render(<TodoList username={username}>Test</TodoList>);

		const usernameElement = screen.getByRole('heading', { name: /john doe/i });
		// const usernameElement = screen.getByText(/john doe/i);

		expect(usernameElement).toBeInTheDocument();
	});

	it('should render a list of todos correctly', () => {
		const fakeTodos: Todo[] = [
			{ id: 1, title: 'Todo test 1' },
			{ id: 2, title: 'Todo test 2', isDone: true }
		];
		useTodosQueryMocked.mockImplementation(() => ({ isLoading: false, data: fakeTodos, addTodo: () => {} }));
		render(<TodoList>Test</TodoList>);

		// const todosList = screen.getByRole('list');
		// const todosItems = within(todosList).getAllByRole('listitem');
		// todosItems.map((todo, index) => expect(todo.textContent).toBe(fakeTodos[index].title));

		expect(screen.getByRole('listitem', { name: /todo test 1/i })).toBeInTheDocument();
		expect(screen.getByRole('listitem', { name: /todo test 2/i })).toBeInTheDocument();
	});

	it('should add a new todo to the list', () => {
		const todoTitle = 'new todo test';
		const addTodoMocked = jest.fn();
		useTodosQueryMocked.mockImplementation(() => ({ isLoading: false, data: [], addTodo: addTodoMocked }));

		render(<TodoList>Test</TodoList>);

		// Write a new todo
		const inputElement = screen.getByLabelText(/add-todo-input/i);
		userEvent.type(inputElement, todoTitle);

		const addTodoButton = screen.getByRole('button', { name: /add todo/i });
		userEvent.click(addTodoButton);

		expect(addTodoMocked).toHaveBeenCalledTimes(1);
		expect(addTodoMocked).toHaveBeenCalledWith({ id: 0, title: 'new todo test' });
	});
});
