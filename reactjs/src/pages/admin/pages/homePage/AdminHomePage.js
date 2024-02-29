import React from 'react';
import { useEffect } from 'react';
import Sidebar from '../../components/sideBar/Sidebar';
import './adminhomepage.css'
import Arevage from '../../components/arevage/Arevage';
import RevenueStatictis from '../../components/revenueSas/RevenueStatictis';
import SaleChart from '../../components/saleChart/SaleChart';
import ProductTable from '../../components/productTable/ProductTable';
import RecentOrders from '../../components/recentOrder/RecentOrders';
import Header from '../../components/header/Header';
import UserList from '../../components/users/UserList';
const AdminHomePage = () => {
    console.log("hello");
    return (
        <div className='admin-home-container'>
            <Header title="Trang chủ"/>
            {/* <Arevage /> */}
            {/* <div className='sale-chart'>
                <div className='title-container'>
                    <h2>Báo cáo doanh thu</h2>
                </div>
                <SaleChart />
            </div> */}
            <div className='product-order'>
                <UserList/>
            </div>
            {/* <RevenueStatictis /> */}
            {/* <RecentOrders/> */}
        </div>
    );
};
export default AdminHomePage;