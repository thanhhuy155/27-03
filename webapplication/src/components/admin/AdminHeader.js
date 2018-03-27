import React, { Component } from 'react';
import './adminstyle.css' 
import { Link, Switch, BrowserRouter as Router } from 'react-router-dom'
export default class AdminHeader extends Component {
  render() {
    return (
      <div class="row"> 
        <header id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-10">
                <h1><span className="glyphicon glyphicon-cog" aria-hidden="true" /> LBA <small>Manage Admin Site</small></h1>
              </div>
              <div className="col-md-2">
                <div className="dropdown create">
                  <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Account Manage
                  <span className="caret" />
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a >Edit Infomation</a></li>
                    <li><a >Change Password</a></li>
                    <li><Link to="/w/Register" >Add User</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
};
