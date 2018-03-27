import React, { Component } from 'react';
import './adminstyle.css'
import { Link } from 'react-router-dom'
export default class AdminNarbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand">AdminLBA</a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li className="active">
                                    <Link to="/a"><a style={{
                                        color: 'white'
                                    }}>Dashboard</a>
                                    </Link></li>
                                <li><a>Customer</a></li>
                                <li><Link to = "/a/list-admin" >Shop's Owner</Link></li>
                                <li><a >Statistics</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a>Welcome, Harrison</a></li>
                                <li>
                                    <Link to="/w/Login">
                                        <a style={{
                                            color: 'white'
                                        }}>Logout</a>
                                    </Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
};
