import React from 'react';

import Sidebar from './Sidebar';
import MainPanel from './MainPanel';

class Layout extends React.Component {
    render() {
        return (
            <div className="wrapper">
                {React.cloneElement(<Sidebar />, this.props)}
                {React.cloneElement(<MainPanel />, this.props)}
            </div>
        )
    }
}

export default Layout;