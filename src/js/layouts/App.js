import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import * as ActionCreator from '../actions/ActionCreator';
import Layout from './Layout';

function mapStateToProps(state) {
    return {
        github: state.github,
        prs: state.prs
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreator, dispatch);
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));

export default App;