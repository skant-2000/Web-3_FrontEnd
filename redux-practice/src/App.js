import './App.css';
import ByOne from './components/ByOne';
import ByX from './components/ByX';
import DisplayCount from './components/DisplayCount';
function App() {
  return (
    <div className="App">
      <DisplayCount />
      <ByOne />
      <ByX />
    </div>
  );
}

export default App;
