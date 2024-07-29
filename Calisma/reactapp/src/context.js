
/*
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import UserConsumer from "../context";

const UserContext = React.createContext();

/*
const reducer = (state,action) = > 

{
  switch (action.type)
  {
    case "DELETE_USER";
    return{
      ...state,
      users: state.users.filter(user => action.payload !== user.id)    
    }
      default:
        return state
  }
}

export class UserProvider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Mustafa Murat Çoşkun",
        salary: "5000",
        department: "Bilişim"
      },
      {
        id: 2,
        name: "DSSD dssa",
        salary: "7000",
        department: "Teknoloji"
      },
      {
        id: 3,
        name: "KKKKSad dsaff",
        salary: "3400",
        department: "Lojistik"
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
    
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;
*/