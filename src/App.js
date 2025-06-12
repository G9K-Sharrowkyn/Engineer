import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import './App.css';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem', background: '#282c34' }}>
        <NavLink to="/" end style={{ marginRight: 16, color: '#61dafb' }}>
          Dashboard
        </NavLink>
        <NavLink to="/history" style={{ color: '#61dafb' }}>
          Historia
        </NavLink>
      </nav>
      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
