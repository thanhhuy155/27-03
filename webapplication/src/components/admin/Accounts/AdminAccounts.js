import React, { Component, Fragment } from 'react';
import '../adminstyle.css';

export default class AdminAccounts extends Component {
    render() {
        return (
            <div class="col-md-9">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Shop Owner List</h3>
                    </div>
                    <div className="panel-body">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>ID Account</th>
                                    <th>ID Shop</th>
                                    <th>Name</th>
                                    <th>Phone Number</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.children}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
};

