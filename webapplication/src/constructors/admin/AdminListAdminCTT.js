import React, { Component,Fragment } from 'react';
import AdminAccounts from '../../components/admin/Accounts/AdminAccounts' ;
import { connect } from 'react-redux'
import '../../components/admin/adminstyle.css'
class AdminListAdmin extends Component {
    render() {
        return (
                <AdminAccounts />
        )
    }
};
const mapStyleToProps = (state) => {
    return {
    }
}
export default connect(mapStyleToProps, null)(AdminListAdmin)
