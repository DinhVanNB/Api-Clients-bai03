import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/users")
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        throw err;
      });
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {users.map(user => (
            <li key={user.id}><Link to={`/user/${user.id}`}>{user.name}  </Link> </li>
          ))}
        </ul>
        <button type="button">
            <Link to="/user/add">
              Create
            </Link>
        </button>
      </div>
    );
  }
}

export default Users;