import React from 'react';

import Content from './Content';
import Footer from './Footer';
import Header from './Header';

class MainPanel extends React.Component {
    render() {
        return (
            <div className="main-panel">
                <Header />
                <Content />
                <Footer />
            </div>
        )
    }
}

export default MainPanel;