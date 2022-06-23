import TodoList from './components/todoList';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <TodoList username="John Doe" />
        </div>
    );
};

export default App;
