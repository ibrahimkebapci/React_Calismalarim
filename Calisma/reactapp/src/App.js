import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Pages from './Components/Pages';
import Posts from './Components/Posts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/posts" element={<Posts />} />
        {/* Diğer rotaları gerektiği gibi ekleyin */}
      </Routes>
    </Router>
  );
}

export default App;



/*
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
import Test from "./Components/Test";
*/

/*
class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Bram",
        salary: "5000",
        department: "Bilişim",
      },
      {
        id: 2,
        name: "Keramettin Taslak",
        salary: "4000",
        department: "Pazarlama",
      },
      {
        id: 3,
        name: "Busbus",
        salary: "6000",
        department: "Lojistik",
      },
    ],
  };

  render() {
    return (
      <div className="container">
        <Test test = "denem"/>
        <Navbar title="User App" />
        <Users users={this.state.users} /> {/* Users bileşenine props olarak users verisi gönderiliyor 
        /*
        <AddUser />
      </div>
    );
  }

}
export default App;
*/