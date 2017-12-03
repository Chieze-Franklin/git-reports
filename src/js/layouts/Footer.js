import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <nav className="pull-left">
                        <ul>
                            <li>
                                <a href="https://github.com/chieze-franklin/git-reports">
                                    About this Project
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/chieze-franklin">
                                    My Github Account
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <p className="copyright pull-right">
                        {new Date().getFullYear()}&copy;
                        <a href="https://chieze-franklin.github.io">Franklin Chieze</a>
                    </p>
                </div>
            </footer>
        )
    }
}

export default Footer;