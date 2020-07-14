import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Post from './components/post_list'
import store from './store'
import { Provider } from 'react-redux'
// import { countAddAction } from './actions/counter'
// import { loadPostsAction } from './actions/post';
// store.dispatch(countAddAction)
// store.dispatch(loadPostsAction)
// redux: action reducer state

// reducer 是一个纯函数
// 如果需要改变里面的reducer的值，需使用dispatch派发一个 action 
// ---> action需要两个参数
// type: 通过type区分state做什么
// payload 传递数据

// function getPostsRequest() {
//   return axios.get('https://jsonplaceholder.typicode.com/posts')
// }

// 通过Provider把redux和react连接，store传递到react项目中
ReactDOM.render(
  <Provider store = {store}>
    <Post />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
