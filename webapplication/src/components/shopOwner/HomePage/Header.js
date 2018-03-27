import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-default" role="navigation" style={{ marginBottom: 0, backgroundColor: '#B2EBF2' }}>
                    <div class="navbar-header">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">Title</a>
                    </div>

                    <div class="collapse navbar-collapse navbar-ex1-collapse">
                        <ul class="nav navbar-nav">
                            <li>
                                <a href="#"><span class="glyphicon glyphicon-envelope" aria-hidden="true"></span>&nbsp;<strong>Message</strong></a></li>
                            <li><a href="#"><span class="glyphicon glyphicon-usd" aria-hidden="true"></span>&nbsp;<strong>Budget Management</strong></a></li>
                            <li><a href="#">
                                <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
                                &nbsp;<strong>Statistics</strong></a></li>
                        </ul>

                        <ul class="nav navbar-nav navbar-right">
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <span class="	glyphicon glyphicon-user" aria-hidden="true"></span> &nbsp;
                                    <strong>Name Of User </strong><b class="caret"></b></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#">
                                        <span class="glyphicon glyphicon-list-alt" aria-hidden="true"></span>
                                        &nbsp;<strong>Profile</strong></a></li>
                                    <li><a href="#">
                                        <span class="glyphicon glyphicon-wrench" aria-hidden="true"></span>
                                        &nbsp;<strong>Setting</strong></a></li>
                                    <li class="divider"></li>
                                    <li><a href="#">
                                        <span class="glyphicon glyphicon-log-out" aria-hidden="true"></span>
                                        &nbsp;<strong>Logout</strong></a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
};
