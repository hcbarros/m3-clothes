import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import Main from './screens/main';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Main} />
            {/* <Route path="/game-screen" component={GameScreen} /> */}
        </Switch>
     </BrowserRouter>   
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
