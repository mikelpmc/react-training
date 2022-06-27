import React, { useState } from 'react';
import { StyledItem } from './todoItem.style';

const TodoItem = ({ title }: { title: string }): JSX.Element => {
	const [isDone, setIsDone] = useState(false);

	return (
		<StyledItem $isDone={isDone} onClick={() => setIsDone(!isDone)}>
			{title}
		</StyledItem>
	);
};

export default TodoItem;
