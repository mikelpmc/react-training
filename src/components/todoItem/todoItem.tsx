import React, { useState } from 'react';
import styles from './todoItem.module.css';
import { StyledItem } from './todoItem.style';

const TodoItem = ({ title }: { title: string }): JSX.Element => {
	const [isDone, setIsDone] = useState(false);

	return (
		<StyledItem className={isDone ? styles['item--done'] : ''} onClick={() => setIsDone(!isDone)}>
			{title}
		</StyledItem>
	);
};

export default TodoItem;
