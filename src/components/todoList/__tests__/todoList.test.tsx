import React from 'react';
import { render, screen } from '@testing-library/react';
import TodoList from '../todoList';

describe('Todo list', () => {
	it('should render the username correctly', () => {
		const username = 'John Doe';

		render(<TodoList username={username}>Test</TodoList>);

		const usernameElement = screen.getByRole('heading', { name: /john doe/i });
		// const usernameElement = screen.getByText(/john doe/i);

		expect(usernameElement).toBeInTheDocument();
	});
});
