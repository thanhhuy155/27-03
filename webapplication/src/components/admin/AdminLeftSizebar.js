import React, { Component } from 'react';
import { Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import ListAdminPage from '../../pages/administrator/ListAdminPage';
import routes from '../../admin-router';
import './adminstyle.css'

export default class AdminLeftSizebar extends Component {
  render() {
    return (
        <div className="col-md-3" >
            <div className="list-group" >
                <a className="list-group-item active main-color-bg">
                    <span className="glyphicon glyphicon-cog" aria-hidden="true" /> Menu
          </a>
                <a  className="list-group-item"><span className="glyphicon glyphicon-list-alt" aria-hidden="true" /> Customer Manager <span className="badge">1</span></a>
                <a  className="list-group-item"><span className="glyphicon glyphicon-pencil" aria-hidden="true" /> ShopOwner Manager <span className="badge">1</span></a>
                
                <Link to= "/a/admin-list" className="list-group-item">
                <span className="glyphicon glyphicon-user" aria-hidden="true" /> Admin List
                <span className="badge">
                </span>  </Link>
                <Link to= "/a/promotion"  className="list-group-item">
                <span className="glyphicon glyphicon-user" aria-hidden="true" /> List promotion/event available<span className="badge">
                </span></Link>
                <a  className="list-group-item">
                <span className="glyphicon glyphicon-user" aria-hidden="true" /> Ads reach <span className="badge">
                </span></a>
                <Link to="/a/shopowner"  className="list-group-item">
                <span className="glyphicon glyphicon-user" aria-hidden="true" /> Shop's Owner. <span className="badge"></span></Link>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li><a >Home 1</a></li>
                    <li><a>Home 2</a></li>
                    <li><a>>Home 3</a></li>
                </ul>
            </div>
            <div className="well">
                <h4>Notification Analysis</h4>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{ width: '60%' }}>
                        60%
            </div>
                </div>
                <h4>Taget Customer </h4>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{ width: '40%' }}>
                        40%
            </div>
                </div>
            </div>
        </div>
    )
  }
};

