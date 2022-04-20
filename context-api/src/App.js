import './App.css';
import Login from './component/Login';
import Navbar from './component/Navbar';
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext"
import HomaPage from './component/HomaPage';

function App() {

  const {token, showLoginPage} = useContext(AuthContext)

  return (
    <div className="App">
      <Navbar />
      {showLoginPage ? <Login /> : null}
      {token.token && !showLoginPage ? <HomaPage /> : null}
    </div>
  );
}

export default App;
