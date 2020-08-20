import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { BrowserRouter, Route } from 'react-router-dom';

import Signup from './Components/user/Signup';
import Signin from './Components/user/Signin';

import App from './Components/App';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path='/' exact component={Signin} />
      <Route path='/App' exact component={App} />
      <Route path='/signup' exact component={Signup} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
