import { createStore } from 'redux';
import rootReducer from './reducers';
let comments = ['yanghui:滴水穿石非一日之功','yoko:邂逅最美的那片海']
const posts=[
  {id:1,title:'redux-hello'},
  {id:2,title:'redux-baby'}
]

const defaultState={
  comments,
  posts
}
const store = createStore(rootReducer,defaultState);
export default store;
