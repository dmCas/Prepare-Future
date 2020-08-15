import React, { Component } from 'react';
import UserAdd from './UserAdd';
import UserList from './UserList';
import { Link, Route} from 'react-router-dom';

class User extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="col-md-2">
          <div className="nav nav-stacked">
            <li>
              <Link to="/user/add">用户添加</Link>
            </li>
            <li>
              <Link to="/user/list">用户列表</Link>
            </li>
          </div>
        </div>
        <div className="col-md-10">
          <Route path="/user/add" component={UserAdd}></Route>
          <Route path="/user/list" component={UserList}></Route>
        </div>
      </div>
    );
  }
}

export default User;