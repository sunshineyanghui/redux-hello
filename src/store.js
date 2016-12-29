import { createStore } from 'redux';
let comments = ['yanghui:滴水穿石非一日之功','yoko:邂逅最美的那片海']

function commentReducer(state=[],action){
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, action.comment]
    default:
      return state
  }
}
const store = createStore(commentReducer,comments);
export default store;
