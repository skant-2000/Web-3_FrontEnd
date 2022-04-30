import './App.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom"
import IndividualTodo from './components/IndividualTodo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:id' element={<IndividualTodo/>} />
      </Routes>
    </div>
  );
}

export default App;
