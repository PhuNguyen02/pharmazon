import React from 'react';
import ProductDataTable from '../../components/productDataTable/ProductDataTable';
import Header from '../../components/header/Header';
import './../adminLayout/adminLayout.css'
import './adminProductList.css'
const AdminProductsList = () => {
    return (
        <div className='admin-home-container'>
            <Header title = "Danh sách sản phẩm"/>
            <div className='admin-product-list-nav-table'>
                <div className='admin-product-list-filter-action'>
                    <select name='product_cat' id='product_cat' className='admin-product-list-dropdown_product_cat'>
                        <option value selected = "selected">Chọn theo danh mục</option>
                        
                    </select>
                </div>
            </div>
            <ProductDataTable/>
        </div>
    );
};

export default AdminProductsList;