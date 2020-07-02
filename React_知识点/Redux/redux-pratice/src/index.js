import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// redux: action reducer state

// reducer 是一个纯函数
// 如果需要改变里面的reducer的值，需使用dispatch派发一个 action 
//---> action需要两个参数
// type: 通过type区分state做什么
// payload 传递数据

// 让store数据源被管理起来 
const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(...[thunk]), //需要使用的中间件数组
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)


// function getPostsRequest() {
//   return axios.get('https://jsonplaceholder.typicode.com/posts')
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
