import { createStore } from 'redux';
import rootReducer from './reducers';
let comments = {
  1: ['nice post', 'help me a lot'],
  2: ['really good', 'save me lots of time']
}
const posts=[
  {id:1,title:'redux-hello',likes:4},
  {id:2,title:'redux-baby',likes:5}
]

const defaultState={
  comments,
  posts
}
const store = createStore(rootReducer,defaultState);
export default store;
