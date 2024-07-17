import React, { Component } from 'react'
import 


class AddUser extends Component {
  render() {
    return (
      <div className='col-md-8 mb-4'>

        <div className = "card">
            <div className = "card-header">
                <h4> Add User from</h4>
            </div>
            <div className = "card-body">
                <form>
                    <div className = "from-group">
                            <label htmlFor = "department">Department</label>
                            <input
                            type = "text"
                            name = "department"
                            id = "department"
                            placeholder = "Enter Department"
                            class = "form-control"
                            />
                    </div>

                    <div className = "from-group">
                            <label htmlFor = "salary">Department</label>
                            <input
                            type = "text"
                            name = "salary"
                            id = "salary"
                            placeholder = "Enter salary"
                            class = "form-control"
                            />
                    </div>

                    <button class = "btn btn-danger btn-block" type = "submit">Add User</button>

                </form>
            </div>

        </div>
        
      </div>
    )
  }
}

export default AddUser;