import React from 'react';
import {Link} from 'react-router-dom';

const disabledLink = {
    pointerEvents: 'none',
    cursor: 'not-allowed'
};

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        
        this.makeActive = this.makeActive.bind(this);
    }

    makeActive(ref) {
        const allRefs = ["pr", "ab"];
        allRefs.forEach(r => {
            this.refs[r].className = "";
        });
        this.refs[ref].className = "active";
    }

    render() {
        return (
            <div className="sidebar" data-color="purple" data-image="%PUBLIC_URL%/assets/img/sidebar-1.jpg">
                {/*
                <!--
                    Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"

                    Tip 2: you can also add an image using data-image tag
                -->
                 */}

                <div className="logo">
                    <Link to="/" className="simple-text">
                        Git Reports
                    </Link>
                </div>
                
                <div className="sidebar-wrapper">
                    <ul className="nav">
                        <li ref="pr">
                            <Link to="/pr" onClick={() => this.makeActive('pr')} style={this.props.github.repo? {}: disabledLink}>
                            <i className="material-icons">bubble_chart</i>
                                <p>PR Report</p>
                            </Link>
                        </li>
                        <li ref="ab">
                            <Link to="/ab" onClick={() => this.makeActive('ab')} style={this.props.github.repo? {}: disabledLink}>
                            <i className="material-icons">content_paste</i>
                                <p>AB Tests</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Sidebar;