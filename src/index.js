import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import './App.css';
import App from './App';
import Home from './components/Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/all" component={App} />
  </Switch>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
