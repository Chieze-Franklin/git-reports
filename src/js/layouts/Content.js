import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import PrReport from '../pages/PrReport';

class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/pr" component={PrReport} />
                </Switch>
            </div>
        )
    }
}

export default Content;