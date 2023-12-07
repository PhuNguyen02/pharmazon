import React from 'react';
import './../adminLayout/adminLayout.css'
import Header from '../../components/header/Header';
import UserList from '../../components/users/UserList'
const AdminUsersPage = () => {
    return (
        <div className='admin-home-container'>
            <Header title = "Danh sách người dùng"/>
            <UserList/>
        </div>
    );
};

export default AdminUsersPage;