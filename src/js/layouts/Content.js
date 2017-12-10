import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import PrReport from '../pages/PrReport';

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route exact={true} path='/' render={(props) => (React.cloneElement(<Home />, {...props, ...this.props}))}/>
                    <Route exact={true} path='/pr' render={(props) => (React.cloneElement(<PrReport />, {...props, ...this.props}))}/>
                    <Route path='*' render={(props) => (React.cloneElement(<NotFound />, {...props, ...this.props}))}/>
                </Switch>
            </div>
        )
    }
}

export default Content;