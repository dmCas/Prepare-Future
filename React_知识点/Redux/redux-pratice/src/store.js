import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import thunk from 'redux-thunk'
import rootReducers from './reducers'
// 让store数据源被管理起来 
const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(...[thunk]), //需要使用的中间件数组
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store