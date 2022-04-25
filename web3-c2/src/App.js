import './App.css';
import FIrstPage from './components/FIrstPage';
import SecondPage from './components/SecondPage';
import { Routes, Route } from "react-router-dom"
import UsersList from './components/UsersList';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/registration/one' element={<FIrstPage />} />
        <Route path='/registration/two' element={<SecondPage />} />
        <Route path='/users' element={<UsersList />} />
      </Routes>
    </div>
  );
}

export default App;
