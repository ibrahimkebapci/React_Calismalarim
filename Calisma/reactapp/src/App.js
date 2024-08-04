import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Pages from './Components/Pages';
import Posts from './Components/Posts';
import Sidebar from './Sidebar';
import EventTimeline from './EventTimeLine';
import './App.css';
import UserStats from './Components/UserStats'; // Doğru yolu kullanarak içe aktarın

function App() {
  return (
    <Router>
      <div className="App" style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <header className="App-header">
            <h1>Welcome to User Stats Dashboard</h1>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/pages" element={<Pages />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/event-timeline" element={<EventTimeline />} />
              <Route path="/user-stats" element={<UserStats />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;




/* Birleştirme öncesi
/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Pages from './Components/Pages';
import Posts from './Components/Posts';
import Sidebar from './Sidebar';
import EventTimeline from './EventTimeLine';
import './App.css';
import UserStats from './UserStats'; // UserStats bileşenini içeri aktar
*/

// 4.Bölümün Kodu
/*

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to User Stats Dashboard</h1>
      </header>
      <main>
      //{ UserStats bileşenini render et}
        <UserStats /> }
      </main>
    </div>
  );
}
  export default App;




// 3.Bölümün Kodu

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <EventTimeline />
    </div>
  );
}

export default App;


// 1.Bölümün Kodu

function App() {
  return (
    <div className="App" style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '20px' }}>
      <h1>Content Area</h1>
       // { Diğer içerikler burada yer alacak }
      </div>
    </div>
  );
}
export default App;




//2 bölüm

function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;

*/