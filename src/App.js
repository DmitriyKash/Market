import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TelegramAuth from './components/TelegramAuth';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={TelegramAuth} />
        <Route path="/products" component={ProductList} />
        <Route path="/" component={TelegramAuth} />
      </Switch>
    </Router>
  );
};

export default App;
