import { combineReducers } from 'redux';//合并reducers

import postReducer from './posts';
import commentReducer from './comments';

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer
});

export default rootReducer;
