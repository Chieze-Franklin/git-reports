import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as ActionCreator from '../actions/ActionCreator';
import Layout from './Layout';

function mapStateToProps(state) {
    return {
        github: state.github
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreator, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Layout);

export default App;