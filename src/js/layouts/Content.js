import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import PrReport from '../pages/PrReport';

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route exact={true} path='/' render={(props) => (React.cloneElement(<Home />, {...props, ...this.props}))}/>
                    <Route exact={true} path='/pr' render={(props) => (React.cloneElement(<PrReport />, {...props, ...this.props}))}/>
                </Switch>
            </div>
        )
    }
}

export default Content;