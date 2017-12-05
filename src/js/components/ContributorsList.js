import React from 'react';

class ContributorsList extends React.Component {
    render() {
        return (
            <div className="card card-nav-tabs">
                <div className="card-header" data-background-color="purple">
                    <div className="nav-tabs-navigation">
                        <div className="nav-tabs-wrapper">
                            <form className="navbar-form navbar-right" role="search" onSubmit={this.findContributor}>
                                <div className="form-group  is-empty">
                                    <input type="text" className="form-control" placeholder="Github username" ref="repo_contributor" />
                                    <span className="material-input"></span>
                                </div>
                                <button type="submit" className="btn btn-white btn-round btn-just-icon">
                                    <i className="material-icons">search</i>
                                    <div className="ripple-container"></div>
                                </button>
                            </form>
                            <ul className="nav nav-tabs" data-tabs="tabs">
                                <li className="active">
                                    <a>
                                        <i className="material-icons">person</i>
                                        <div className="ripple-container"></div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-content">
                    <div className="tab-content">
                        <div className="tab-pane active" id="profile">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" name="optionsCheckboxes" readOnly={false} onChange={this.toggleContributor} />
                                                </label>
                                            </div>
                                        </td>
                                        <td>Franklin Chieze</td>
                                        <td className="td-actions text-right">
                                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                                <i className="material-icons">edit</i>
                                            </button>
                                            <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                <i className="material-icons">close</i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="checkbox">
                                                <label>
                                                    <input type="checkbox" name="optionsCheckboxes"  onChange={this.toggleContributor} />
                                                </label>
                                            </div>
                                        </td>
                                        <td>Atiku Abu</td>
                                        <td className="td-actions text-right">
                                            <button type="button" rel="tooltip" title="Edit Task" className="btn btn-primary btn-simple btn-xs">
                                                <i className="material-icons">edit</i>
                                            </button>
                                            <button type="button" rel="tooltip" title="Remove" className="btn btn-danger btn-simple btn-xs">
                                                <i className="material-icons">close</i>
                                            </button>
                                        </td>
                                    </tr>
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