import './App.css';
import CompleteTodoList from './components/CompleteTodoList';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoList />
      <CompleteTodoList />
    </div>
  );
}

export default App;
