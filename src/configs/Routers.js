import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../components/main/Main';
import Product from '../components/product/Product';

export class Routers extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/main" component={Main} />
                    <Route path="/product" component={Product} />
                </Switch>
            </Router >
        )
    }
}

export default Routers;


