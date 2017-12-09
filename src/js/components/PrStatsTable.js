import React from 'react';

class PrStatsTable extends React.Component {
    totalPrs = 0;
    usernamePrsMap = new Map();

    render() {
        let prStats;

        if (this.props.prs && this.props.prs.prs && this.props.prs.prs.length > 0) {
            this.totalPrs = this.props.prs.prs.length;
            this.props.prs.prs.forEach(pr => {
                const username = pr.user.login;
                let prObj = this.usernamePrsMap.get(username) || {username, closedPrs: 0, mergedPrs: 0};
                if (pr.closed_at && pr.merged_at) {
                    prObj.mergedPrs++;
                }
                else if (pr.closed_at && !pr.merged_at) {
                    prObj.closedPrs++;
                }
                this.usernamePrsMap.set(username, prObj);
            });

            let prObjs = [];
            this.usernamePrsMap.forEach(entry => {
                prObjs.push(entry);
            });

            prStats = prObjs.map(prObj => {
                return (<tr key={prObj.username}>
                            <td>{prObj.username}</td>
                            <td>{prObj.mergedPrs}</td>
                            <td>{prObj.closedPrs}</td>
                            <td>{prObj.mergedPrs + prObj.closedPrs}</td>
                            <td className="text-primary">{prObj.mergedPrs/(prObj.mergedPrs + prObj.closedPrs) * 100}%</td>
                        </tr>
                    );
            });
        }

        return (
            <div className="card">
                <div className="card-header" data-background-color="purple">
                    <h4 className="title">PR Performance</h4>
                    <p className="category">See what percentage of your closed PRs were merged</p>
                </div>
                <div className="card-content table-responsive">
                    <table className="table">
                        <thead className="text-primary">
                            <tr>
                                <th>Username</th>
                                <th>Merged PRs</th>
                                <th>Closed (Not Merged) PRs</th>
                                <th>Total PRs</th>
                                <th>% Success</th>
                            </tr>
                        </thead>
                        <tbody>
                            {prStats}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default PrStatsTable;