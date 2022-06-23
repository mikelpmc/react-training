import TodoList from './components/todoList';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <TodoList role="button" onClick={() => console.log('hello')}>
                <h2>Other react components</h2>
            </TodoList>
        </div>
    );
};

export default App;
