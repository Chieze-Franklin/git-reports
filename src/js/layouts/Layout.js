import React from 'react';

import Sidebar from './Sidebar';
import MainPanel from './MainPanel';

class Layout extends React.Component {
    render() {
        return (
            <div class="wrapper">
                <Sidebar />
                <MainPanel />
            </div>
        )
    }
}

export default Layout;