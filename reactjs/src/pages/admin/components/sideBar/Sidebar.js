import React from 'react';
import './sideBar.css'
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <>
            <aside>
                <div className='sidebar-container' >
                <div className="top">
                    <div className="logo">
                        <h2>
                            <span className="danger">YourDoctor ADMIN</span>
                        </h2>
                    </div>
                    <div className="close" id="close-btn">
                        <span className="material-symbols-sharp">close</span>
                    </div>
                </div>
                <div className="sidebar">
                    <Link to="/admin">    
                    <h3>Trang chủ</h3>
                    </Link>
                    <Link to="/admin/users">    
                    <h3>Quản lý người dùng</h3>
                    </Link>
                    <a href="#">
                       
                        <h3>Quản lý dược sĩ</h3>
                    </a>
                    <Link to="/admin/products">    
                    <h3>Quản lý sản phẩm</h3>
                    </Link>
                    <a href="#">
                       
                        <h3>Quản lý giao diện</h3>
                    </a>
                    <a href="#">
                        
                        <h3>Quản lý đơn hàng</h3>
                    </a>
                    <a href="#">
                        
                        <h3>Quản lý giao dịch</h3>
                    </a>
                    <a href="#">
                        
                        <h3>Quản lý thanh toán</h3>
                    </a>
                    <a href="#">
                        
                        <h3>Quản lý báo cáo thống kê</h3>
                    </a>
                    <div className='footer-sidebar'>

                    <a href="#">
                       
                        <h3>Cài đặt</h3>
                    </a>
                    <a href="#">

                        <h3>Đăng xuất</h3>
                    </a>
                    </div>
                </div>
                </div>
            </aside>

        </>
    );
};
export default Sidebar;