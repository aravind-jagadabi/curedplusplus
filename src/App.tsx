import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import JoinCall from './components/JoinCall';
import AppointmentBooking from './components/AppointmentBooking';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path= "/login" element = {<Login />} />
          <Route path= "/home" element = {(
            <div>
              <Header />
              <Home />
            </div>
          )}/>
          <Route path= "/joincall" element = {<JoinCall />} />
          <Route path = "/appointment" element = {<AppointmentBooking/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
