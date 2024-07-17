import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Users from "./Components/Users";
import AddUser from "./componenets/AddUser"

class App extends Component {
  state = 
  {
    users:
    [
      {
        id: 1 ,
        name: "bram",
        salary : " 5000",
        department : "Bilişim"
      },

      {
        id: 2 ,
        name: "Keramettin Taslak",
        salary : "4000",
        department : "Pazarlama"
      },

      {
        id: 3 ,
        name: "Busbus",
        salary : " 6000",
        department : "Lojistik"
      },
    ]
  }
  render() {
    return (
      <div className="container">
        <Navbar title = "User App"/>
        <Users/>
      </div> 

      <hr>

      </hr>
    );
  }
}

export default App;
