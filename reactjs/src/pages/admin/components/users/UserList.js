import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchUserList } from '../../../../redux/api/userAPI';
import './userList.css'
const UserList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const users = useSelector(state => state.auth)
    console.log(users);
    useEffect(()=> {
        dispatch(fetchUserList())
    },[])
    return (
        <>
        <div className='user-table-container'>
                <div className='user-table-body'>
                    <div className='user-table-wrapper'>
                        <table className='user-table-data'>
                            <thead>
                                <tr>
                                    <th rowSpan={1} colSpan={1}>Tên</th>
                                    <th rowSpan={1} colSpan={1}>Email</th>
                                    <th rowSpan={1} colSpan={1}>Quyền đăng nhập</th>
                                    <th rowSpan={1} colSpan={1}>Ngày tạo</th>
                                    <th rowSpan={1} colSpan={1}>Trạng thái</th>
                                    <th rowSpan={1} colSpan={1}>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                            {users?.userData?.data?.map((item) =>( 
                                <tr className='odd'>
                                    <td>{item.full_name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td>{item.created_on}</td>
                                    <td>
                                        <span className='success'>{item.status}</span>
                                    </td>
                                    <td>Xoá/ sửa</td>
                                </tr>
                            ))}
                                
                          
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserList;