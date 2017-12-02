import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            owner: null,
            repo: null
        };
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
                    <a href="http://www.creative-tim.com" className="simple-text">
                        Git Reports
                    </a>
                </div>
                
                <div className="sidebar-wrapper">
                    {this.state.owner && this.state.repo ? 
                    (<ul className="nav">
                    <li className="active">
                        <a href="dashboard.html">
                            <i className="material-icons">person</i>
                            <p>Owner/Organization</p>
                        </a>
                    </li>
                    <li>
                        <a href="./user.html">
                            <i className="material-icons">bubble_chart</i>
                            <p>User Profile</p>
                        </a>
                    </li>
                    <li>
                        <a href="./table.html">
                            <i className="material-icons">content_paste</i>
                            <p>Table List</p>
                        </a>
                    </li>
                    <li>
                        <a href="./typography.html">
                            <i className="material-icons">library_books</i>
                            <p>Typography</p>
                        </a>
                    </li>
                    <li>
                        <a href="./icons.html">
                            <i className="material-icons">bubble_chart</i>
                            <p>Icons</p>
                        </a>
                    </li>
                    <li>
                        <a href="./maps.html">
                            <i className="material-icons">location_on</i>
                            <p>Maps</p>
                        </a>
                    </li>
                    <li>
                        <a href="./notifications.html">
                            <i className="material-icons text-gray">notifications</i>
                            <p>Notifications</p>
                        </a>
                    </li>
                    </ul>) :
                    (<div></div>)}
            </div>
            </div>
        )
    }
}

export default Sidebar;