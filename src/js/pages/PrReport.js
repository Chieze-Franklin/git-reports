import React from 'react';

import ContributorsList from '../components/ContributorsList'

class PrReport extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <ContributorsList />
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12"></div>
                </div>
            </div>
        )
    }
}

export default PrReport;