import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
import AddUser from "./Components/AddUser"; // Düzeltilmiş import yolu

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
        <Navbar title="User App" />
        <Users users={this.state.users} /> {/* Users bileşenine props olarak users verisi gönderiliyor */}
        <AddUser />
      </div>
    );
  }
}

export default App;
