import React from 'react';
import ProductDataTable from '../../components/productDataTable/ProductDataTable';
import Header from '../../components/header/Header';
import './../adminLayout/adminLayout.css'
import './adminProductList.css'

import { Navigate, useNavigate } from 'react-router-dom';
const AdminProductsList = () => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
       navigate("/admin/addproduct")
    }
    return (
        <div className='admin-home-container'>
            <Header title = "Danh sách sản phẩm"/>
            <div className='admin-product-list-nav-table'>
                <div className='admin-product-list-filter-action'>
                    <select name='product_cat' id='product_cat' className='admin-product-list-dropdown_product_cat'>
                        <option value selected = "selected">Chọn theo danh mục</option>
                    </select>
                </div>
                <div className='admin-product-list-add-product-action'>
                    <button onClick={handleSubmit}>Thêm</button>
                </div>
            </div>
            <ProductDataTable/>
        </div>
    );
};

export default AdminProductsList;