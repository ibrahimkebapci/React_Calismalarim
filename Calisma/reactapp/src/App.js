import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Pages from './Components/Pages';
import Posts from './Components/Posts';
import Sidebar from './Sidebar';
import EventTimeline from './EventTimeLine';

// 3.Bölümün Kodu
/*
function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <EventTimeline />
    </div>
  );
}

export default App;
*/

// 1.Bölümün Kodu
/*
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
*/



//2 bölüm
/*
function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
*/
