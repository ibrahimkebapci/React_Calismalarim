import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserConsumer from "../context";


class User extends Component {
    state = {
        isVisible: false
    }

    static defaultProps = {
        name: "Bilgi Yok",
        salary: "Bilgi Yok",
        department: "Bilgi Yok"
    }
    
    onClickEvent = (number, e) => {
        this.setState({
            isVisible: !this.state.isVisible
        });
    }
    
    // eslint-disable-next-line no-dupe-class-members
    onClickEvent = (dispatch, e) => {
       const {id} = this.props;
       dispatch({type : "DELETE_USER",payload:id});
       
    }

    render() {
        const { name, department, salary } = this.props;
        const { isVisible } = this.state;

        
        return (
            <UserConsumer>

                {
                    value=>
                    {
                        const {dispatch} = value

                        const { users } = value;
                        return (
                            <div className="col-md-8 mb-4">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 className="d-inline" onClick={this.onClickEvent.bind(this, 34)}>{name}</h4>
                                        <i onClick= {this.onDeleteUser.bind(this,dispatch)} className='' ></i>
                                    </div>
                                    {
                                        isVisible ? <div className="card-body">
                                            <p className="card-text">Maaş : {salary}</p>
                                            <p className="card-text">Department : {department}</p>
                                        </div> : null
                                    }
                                </div>
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
          
    }
}

// eslint-disable-next-line react/no-typos
User.propTypes = {
    name: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default User;
