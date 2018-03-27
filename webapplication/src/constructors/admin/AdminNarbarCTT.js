import React, { Component } from 'react';
import AdminNarbar from '../../components/admin/AdminNarbar'
import { connect } from 'react-redux'
class AdminNarbarCTT extends Component {
    render() {
        return (
            <div>
                <AdminNarbar/>
            </div>
        )
    }
};

const mapStyleToProps = (state) => {
    return {
    }
}



export default connect(mapStyleToProps, null)(AdminNarbarCTT)
