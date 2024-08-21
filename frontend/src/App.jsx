import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import CodeGeneration from './pages/CodeGeneration';
import Background from './components/Background';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Background />
        <div className="content-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/generate" element={<CodeGeneration />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;





