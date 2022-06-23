import React, { useState } from 'react';
import styles from './todoItem.module.css';

const TodoItem = ({ title }: { title: string }): JSX.Element => {
	const [isDone, setIsDone] = useState(false);

	return (
		<li className={isDone ? styles['item--done'] : ''} onClick={() => setIsDone(!isDone)}>
			{title}
		</li>
	);
};

export default TodoItem;
