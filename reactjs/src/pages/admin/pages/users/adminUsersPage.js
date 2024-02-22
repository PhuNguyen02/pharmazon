import React from 'react';
import './../adminLayout/adminLayout.css'
import Header from '../../components/header/Header';
import UserList from '../../components/users/UserList'
import { useNavigate } from 'react-router-dom';
const AdminUsersPage = () => {
    const navigate = useNavigate()
    return (
        <div className='admin-home-container'>
            <Header title = "Danh sách người dùng"/>
            <UserList/>
           
        </div>
    );
};

export default AdminUsersPage;