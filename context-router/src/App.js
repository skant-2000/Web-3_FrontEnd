import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Users from './pages/Users';
import UserDetail from './pages/UserDetail';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/users' element={<Users />} />
        <Route path='/users/:id' element={<UserDetail />} />
      </Routes>
    </div>
  );
}

export default App;
