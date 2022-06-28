import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoItem from '../todoItem';

describe('TodoItem', () => {
	it('should have the todo item with aria-pressed false', () => {
		render(<TodoItem title="Learn testing library" />);

		expect(screen.getByRole('button', { name: /learn testing library/i, pressed: false })).toBeInTheDocument();
	});

	it('should change the aria-pressed to true when clicking on the todo item', () => {
		render(<TodoItem title="Learn testing library" />);

		expect(screen.getByRole('button', { name: /learn testing library/i, pressed: false })).toBeInTheDocument();

		userEvent.click(screen.getByRole('button', { name: /learn testing library/i }));

		expect(screen.getByRole('button', { name: /learn testing library/i, pressed: true })).toBeInTheDocument();
	});
});
