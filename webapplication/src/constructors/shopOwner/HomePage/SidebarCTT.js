import React, { Component } from 'react';
import {connect} from 'react-redux'
import Sidebar from '../../../components/shopOwner/HomePage/Sidebar';
class SidebarCTT extends Component {
  render() {
    return (
      <div>
        <Sidebar />
      </div>
    )
  }
};

export default connect(null,null) (SidebarCTT)
