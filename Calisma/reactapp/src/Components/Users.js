import React, { Component } from 'react'
import User from "./User";
class Users extends Component {
  render() {
    const {users} = this.props;
    console.log(users);
    return (
      <div>
        {
            users.map(user = >
                {
                    return(
                        <User
                            key = {user.id}
                            id= {user.id}
                            name = {user.name}
                            salary = {user.salary}
                            department = {user.department}

                        />
                    )
                })
                oneClickEvet = (e)=>
                {
                  this.setState({
                    isVisible : !this.state.isVisible
                  })
                }
                
                onDeleteUser = (e) =>
                {
                  const {id} = this.props;
                }
        }
      </div>
    )
  }
}

export default Users;