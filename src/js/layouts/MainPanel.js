import React from 'react';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';

class MainPanel extends React.Component {
    render() {
        return (
            <div className="main-panel">
                {React.cloneElement(<Header />, this.props)}
                {React.cloneElement(<Content />, this.props)}
                {React.cloneElement(<Footer />, this.props)}
            </div>
        )
    }
}

export default MainPanel;