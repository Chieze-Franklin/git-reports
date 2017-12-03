import React from 'react';
import request from 'request-promise-native';

class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        };

        this.submitAccount = this.submitAccount.bind(this);
    }

    submitAccount(e) {
        e.preventDefault();

        const value = this.refs.github_account.value;

        this.props.getGithubAccountLoadingAction(value);

        request({
            url: `https://api.github.com/orgs/${value}/repos?type=all`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            //resolveWithFullResponse: true
        })
        .then((response) => {
            const repos = JSON.parse(response);
            this.props.getGithubAccountLoadedAction({name: value, type: 'org', repos});
        })
        .catch((err) => {
            //if you can't find an organization with that name, search for users with that name
            request({
                url: `https://api.github.com/users/${value}/repos?type=all`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                //resolveWithFullResponse: true
            })
            .then((response) => {
                const repos = JSON.parse(response);
                this.props.getGithubAccountLoadedAction({name: value, type: 'user', repos});
            })
            .catch((err) => {
                this.props.getGithubAccountLoadingFailedAction(err);
            })
        })
    }

    render() {
        console.log(this.props);
        let selectElement;
        if (this.props.github.repos) {
            const repoOptions = this.props.github.repos.map((repo) => (<option key={repo.full_name}>{repo.full_name}</option>));
            selectElement = (<select className="form-control">
                    <option></option>
                    {repoOptions}
                </select>);
        }

        return (
            <nav className="navbar navbar-transparent navbar-absolute">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#"> Material Dashboard </a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="material-icons">dashboard</i>
                                    <p className="hidden-lg hidden-md">Dashboard</p>
                                </a>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="material-icons">notifications</i>
                                    <span className="notification">5</span>
                                    <p className="hidden-lg hidden-md">Notifications</p>
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#">Mike John responded to your email</a>
                                    </li>
                                    <li>
                                        <a href="#">You have 5 new tasks</a>
                                    </li>
                                    <li>
                                        <a href="#">You're now friend with Andrew</a>
                                    </li>
                                    <li>
                                        <a href="#">Another Notification</a>
                                    </li>
                                    <li>
                                        <a href="#">Another One</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#pablo" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="material-icons">person</i>
                                    <p className="hidden-lg hidden-md">Profile</p>
                                </a>
                            </li>
                        </ul>
                        <form className="navbar-form navbar-right" role="search">
                            <div className="form-group  is-empty">
                                {selectElement}
                                <span className="material-input"></span>
                            </div>
                        </form>
                        <form className="navbar-form navbar-right" role="search" onSubmit={this.submitAccount}>
                            <div className="form-group  is-empty">
                                <input type="text" className="form-control" placeholder="Github Account" ref="github_account" />
                                <span className="material-input"></span>
                            </div>
                            <button type="submit" className="btn btn-white btn-round btn-just-icon">
                                <i className="material-icons">search</i>
                                <div className="ripple-container"></div>
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;