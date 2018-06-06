import React from 'react';

import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Ness from './Route3';
import Tacos from './Route2';
import Home from './Route1';

const Routes = () => {
    return (
        <Router>
            <div>
                <Link to="/">Home</Link>
                <Link to="/Dougs-tacos">Tacos</Link>
                <Link to="/Nintendo">Nintendo</Link>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/Dougs-tacos' component={Tacos} />
                    <Route path='/Nintendo' component={Ness} />
                </Switch>
            </div>
      </Router>
    )
}

export default Routes