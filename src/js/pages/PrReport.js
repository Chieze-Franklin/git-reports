import _ from 'lodash';
import React from 'react';
import request from 'request-promise-native';

import ContributorsList from '../components/ContributorsList';
import PrStatsTable from '../components/PrStatsTable';

class PrReport extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        };

        this.fetchPRs = this.fetchPRs.bind(this);
    }

    componentWillMount() {
        if (this.props.github.repo) {
            this.fetchPRs();
        }
    }

    fetchPRs() {
        const accountName = this.props.github.name;
        if (!accountName || _.trim(accountName) === "") return;

        const repoName = this.props.github.repo;
        if (!repoName || _.trim(repoName) === "") return;

        this.props.PrsLoading(accountName, repoName);

        request({
            //url: `https://api.github.com/repos/${repoName}/pulls?state=closed`,//andela/mont-blanc-rc
            url: `https://api.github.com/repos/andela/mont-blanc-rc/pulls?state=closed`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            //resolveWithFullResponse: true
        })
        .then((response) => {
            const prs = JSON.parse(response);
            this.props.PrsLoaded(accountName, repoName, prs);
        })
        .catch((err) => {
            this.props.PrsLoadingFailed(err);
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <ContributorsList {...this.props} />
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <PrStatsTable {...this.props} />
                    </div>
                </div>
            </div>
        )
    }
}

export default PrReport;