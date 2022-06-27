import React, { useState } from 'react';
import { StyledItem, StyledOtherItem } from './todoItem.style';

const TodoItem = ({ title }: { title: string }): JSX.Element => {
	const [isDone, setIsDone] = useState(false);

	return (
		<StyledOtherItem $isDone={isDone} onClick={() => setIsDone(!isDone)}>
			{title}
		</StyledOtherItem>
	);
};

export default TodoItem;
