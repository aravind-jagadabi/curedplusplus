import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path= "/Login" element = {<Login />} />
          <Route path= "/Home" element = {(
            <div>
              <Header />
              <Home />
            </div>
          )}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
