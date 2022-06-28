import React, { useState } from 'react';
import { StyledItem } from './todoItem.style';

const TodoItem = ({ title, ...rest }: { title: string }): JSX.Element => {
	const [isDone, setIsDone] = useState(false);

	return (
		<StyledItem {...rest} role="button" aria-pressed={isDone} $isDone={isDone} onClick={() => setIsDone(!isDone)}>
			{title}
		</StyledItem>
	);
};

export default TodoItem;
