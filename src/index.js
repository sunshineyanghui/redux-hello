import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Router,browserHistory,IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Post from './components/Post';
import './main.css';

const router =(
  <Router history={browserHistory}>
    <Route path='/'>
      <IndexRoute component={Home} />
      <Route path='/posts/:postId' component={Post}/>
    </Route>
  </Router>
)
ReactDOM.render(router, document.getElementById('app'));
