import React, { Component } from 'react';
import { Consumer } from './context'
const { pathToRegexp } = require("path-to-regexp");

class Route extends Component {
  
  render() {
    return (
      <Consumer>
        {/* 跨组件的数据传递 */}
        {
          state => {
            // console.log(state)
            let {path, component: Component} = this.props
            // let pathname = state.location.pathname
            // let reg = pathToRegexp(path, [], {end: false})
            // 判断当前path是否包含pathname
            // if(pathname.match(reg)) {
            //   return <Component state={state}></Component>
            // }
            return null
          }
        }
      </Consumer>
    );
  }
}

export default Route;