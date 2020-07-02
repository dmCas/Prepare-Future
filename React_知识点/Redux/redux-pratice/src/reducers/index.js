import { combineReducers } from 'redux'
import counterReducer from './counter_reducer'
import postReducer from './post_reducer'

// combineReducers 把多个reducer进行合并
const rootReducers = combineReducers({
  counter: counterReducer,
  post: postReducer
})

export default rootReducers