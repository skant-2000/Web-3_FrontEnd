import { Route, Routes } from 'react-router-dom';
import './App.css';
import BookDetails from './components/BookDetails';
import BooksList from './components/BooksList';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:search" element={<BooksList />} />
        <Route path="/:search/:id" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;
