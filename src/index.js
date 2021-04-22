import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import './index.css';
import Main from './screens/main';
import reducer from './reducers/reducer';

import reportWebVitals from './reportWebVitals';

const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
         <BrowserRouter>
            <Switch>
                  <Route path="/" exact={true} component={Main} />
                  {/* <Route path="/game-screen" component={GameScreen} /> */}
            </Switch>
         </BrowserRouter>   
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
