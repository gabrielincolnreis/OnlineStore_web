import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/Login';
import ProductList from '../pages/ProductList';
import Product from '../pages/Product';

const Routes: React.FC = () => (
  <Switch>
    <Route  path="/" exact component={Login} />
    <Route  path="/product_list" component={ProductList} />
    <Route  path="/product/:id" component={Product} />
  </Switch>
)

export default Routes;