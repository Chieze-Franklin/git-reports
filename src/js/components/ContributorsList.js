import React from 'react';

class ContributorsList extends React.Component {
    uniqueUsers = [];

    render() {
        let contributors;
        if (this.props.prs && this.props.prs.prs && this.props.prs.prs.length > 0) {
            contributors = this.props.prs.prs.map(pr => {
                const username = pr.user.login;
                if (this.uniqueUsers.indexOf(username) === -1) {
                    this.uniqueUsers.push(username);

                    return (<tr key={username}>
                                <td>
                                    <div className="checkbox">
                                        <label>
                                            <input type="checkbox" name="optionsCheckboxes"  onChange={this.toggleContributor} />
                                        </label>
                                    </div>
                                </td>
                                <td>{username}</td>
                                <td className="td-actions text-right">
                                    <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                        <i className="material-icons">edit</i>
                                    </button>
                                    <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                        <i className="material-icons">close</i>
                                    </button>
                                </td>
                            </tr>
                        );
                }
            });
        }

        return (
            <div className="card card-nav-tabs">
                <div className="card-header" data-background-color="purple">
                    <h4 className="title">Collaborators</h4>
                </div>
                <div className="card-content">
                    <div className="tab-content">
                        <div className="tab-pane active" id="profile">
                            <table className="table">
                                <tbody>
                                    {contributors}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContributorsList;