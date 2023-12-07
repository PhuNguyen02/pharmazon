import React from 'react';
import './userList.css'
const UserList = () => {
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
                                <tr className='odd'>
                                    <td>phunguyen0212</td>
                                    <td>haiphu95.pdp@gmail.com</td>
                                    <td>admin</td>
                                    <td>12/4/2023</td>
                                    <td>
                                        <span className='success'>Đang hoạt động</span>
                                    </td>
                                    <td>Xoá/ sửa</td>
                                </tr>
                                <tr className='even'>
                                <td>phunguyen0212</td>
                                    <td>haiphu95.pdp@gmail.com</td>
                                    <td>admin</td>
                                    <td>12/4/2023</td>
                                    <td>
                                        <span className='success'>Đang hoạt động</span>
                                    </td>
                                    <td>Xoá/ sửa</td>
                                </tr>
                                <tr className='odd'>
                                <td>phunguyen0212</td>
                                    <td>haiphu95.pdp@gmail.com</td>
                                    <td>admin</td>
                                    <td>12/4/2023</td>
                                    <td>
                                        <span className='success'>Đang hoạt động</span>
                                    </td>
                                    <td>Xoá/ sửa</td>
                                </tr>
                                <tr className='even'>
                                <td>phunguyen0212</td>
                                    <td>haiphu95.pdp@gmail.com</td>
                                    <td>admin</td>
                                    <td>12/4/2023</td>
                                    <td>
                                        <span className='success'>Đang hoạt động</span>
                                    </td>
                                    <td>Xoá/ sửa</td>
                                </tr>
                                <tr className='odd'>
                                <td>phunguyen0212</td>
                                    <td>haiphu95.pdp@gmail.com</td>
                                    <td>admin</td>
                                    <td>12/4/2023</td>
                                    <td>
                                        <span className='success'>Đang hoạt động</span>
                                    </td>
                                    <td>Xoá/ sửa</td>
                                </tr>
                                <tr className='even'>
                                <td>phunguyen0212</td>
                                    <td>haiphu95.pdp@gmail.com</td>
                                    <td>admin</td>
                                    <td>12/4/2023</td>
                                    <td>
                                        <span className='success'>Đang hoạt động</span>
                                    </td>
                                    <td>Xoá/ sửa</td>
                                    </tr>
                                <tr className='odd'></tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserList;