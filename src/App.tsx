import React from 'react';
import TodoList from './components/todoList';
import styles from './App.module.css';

const App = (): JSX.Element => (
	<div className={styles.App}>
		<TodoList>
			<h2>Other react components</h2>
		</TodoList>
	</div>
);

export default App;
