import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Pages from './Components/Pages';
import Posts from './Components/Posts';
import Sidebar from './Sidebar';
import EventTimeline from './EventTimeLine';
import UserStats from './Components/UserStats';
import Login from './Login';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      {isAuthenticated ? (
        <div className="App">
          <Sidebar />
          <div className="content">
            <header className="App-header">
            </header>
            <main>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/pages" element={<Pages />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/event-timeline" element={<EventTimeline />} />
                <Route path="/user-stats" element={<UserStats />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </div>
        </div>
      ) : (
        <div className="login-container">
          <Login onLogin={handleLogin} />
        </div>
      )}
    </Router>
  );
}

export default App;
