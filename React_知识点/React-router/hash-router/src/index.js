import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Redirect, Link, Switch } from 'react-router-dom';
// import { HashRouter as Router, Route, Redirect, Link  }  from './react-router-dom'
import Home from './Home'
import User from './User'
import 'bootstrap/dist/css/bootstrap.css'

export default class App extends Component {
  render() {
    return (
      // 方法都写在router里面 被route调用
      <Router>
        <div className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-heading">
              <div className="navbar-brand">
                react-router实现原理
              </div>
              <div className="nav navbar-nav">
                <li>
                  <Link to="/home">首页</Link>  
                </li>
                <li>
                  <Link to="/user">个人中心</Link>
                </li>
              </div>
            </div>
          </div>

        </div>
        <Switch>  存在被匹配到到就不会被执行
          <Route path="/home" component={Home}></Route>
          <Route path="/user" component={User}></Route>
          {/* <Redirect to="/uer"></Redirect> 如果没有匹配上上面的组件会被重定向 */}
        </Switch>
      </Router>
    )
  }
}

ReactDOM.render(<App />,
  document.getElementById('root')
);

