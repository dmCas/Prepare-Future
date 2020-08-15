import React, { Component } from 'react';
import { Provider } from './context'

// 该组件下Api提供给子组件使用
class HashRouter extends Component {
  constructor() {
    super()
    this.state = {
      location: {
        pathname: window.location.hash.slice(1) || '/'
      }
    }
  }
  // url路径变化 改变location

  componentDidMount() {
    console.log(window.location)
    // 默认hash没有时，自动跳到 / 
    window.location.hash = window.location.hash || '/'
    // 监听hash值变化，重新渲染状态
    window.addEventListener('hashchange', () => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1) || '/'
        }
      })
    })
  }

  render() {
    let value = {
      location: this.state.location,
      history: {
        push(to) {
          window.location.hash =  to
        }
      }
    }
    console.log('window.location.hash:',window.location.hash)
    return (
      <Provider value={value}>
        {
          this.props.children
        }
      </Provider>
    );
  }
}

export default HashRouter;