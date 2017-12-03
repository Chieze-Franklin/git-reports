import _ from 'lodash';
import React from 'react';
import request from 'request-promise-native';

import GithubAccountTypes from '../constants/GithubAccountTypes';

class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        };

        this.submitAccount = this.submitAccount.bind(this);
        this.submitRepo = this.submitRepo.bind(this);
    }

    submitAccount(e) {
        e.preventDefault();

        const accountName = this.refs.github_account.value;
        if (!accountName || _.trim(accountName) === "") return;

        this.props.githubAccountLoading(accountName);

        request({
            url: `https://api.github.com/orgs/${accountName}/repos`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            //resolveWithFullResponse: true
        })
        .then((response) => {
            const repos = JSON.parse(response);
            this.props.githubAccountLoaded({name: accountName, type: GithubAccountTypes.ORG, repo: null, repos});
        })
        .catch((err) => {
            //if you can't find an organization with that name, search for users with that name
            request({
                url: `https://api.github.com/users/${accountName}/repos`,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                //resolveWithFullResponse: true
            })
            .then((response) => {
                const repos = JSON.parse(response);
                this.props.githubAccountLoaded({name: accountName, type: GithubAccountTypes.USER, repo: null, repos});
            })
            .catch((err) => {
                this.props.githubAccountLoadingFailed(err);
            })
        })
    }

    submitRepo(e) {
        e.preventDefault();

        const sel = this.refs.github_repos;
        const repoName = sel.options[sel.selectedIndex].value;

        if (!repoName || _.trim(repoName) === "") return;

        this.props.githubRepoSelected({...this.props.github, repo: repoName});
    }

    render() {
        let selectElement;
        if (this.props.github.repos) {
            const repoOptions = this.props.github.repos.map((repo) => (
                <option key={repo.full_name} value={repo.full_name}>{repo.full_name}</option>));
            selectElement = (<select className="form-control" onChange={this.submitRepo} ref="github_repos">
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