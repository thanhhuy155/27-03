import React, { Component } from 'react';
import AdminHeader from '../../components/admin/AdminHeader'
import {connect} from 'react-redux'
class AdminHeaderCTT extends Component {
  render() {
    return (
      <div>
        <AdminHeader/>
        </div>
    )
  }
};

const mapStyleToProps = (state) => {
  return {
  }
}

export default connect(mapStyleToProps, null)(AdminHeaderCTT)
