import React, { useEffect } from 'react';
import './productTable.css'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchProductList } from "../../../../redux/api/productListAPI";
const ProductDataTable = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const products = useSelector(state => state.producsList)
    let params = {
        limit: 10
    }
    useEffect(()=> {
        dispatch(fetchProductList(params))
    },[])
    return (
        <>
            <div className='product-order-table-container'>
                <div className='product-order-table-body'>
                    <div className='poduct-order-table-wrapper'>
                        <table className='poduct-order-table-data'>
                            <thead>
                                <tr>
                                    <th rowSpan={1} colSpan={1}>Tên sản phẩm</th>
                                    <th rowSpan={1} colSpan={1}>Danh mục</th>
                                    <th rowSpan={1} colSpan={1}>SKU</th>
                                    <th rowSpan={1} colSpan={1}>Số lượng</th>
                                    <th rowSpan={1} colSpan={1}>Giá</th>
                                    <th rowSpan={1} colSpan={1}>Trạng thái</th>
                                    <th rowSpan={1} colSpan={1}>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products?.productsData?.products?.map((item) =>(
                                    <tr className='odd'>
                                    <td>{item.title}</td>
                                    <td>{item.category}</td>
                                    <td>{item.SKU}</td>
                                    <td>{item.quantityOfUnit}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <span className='success'>Đang hoạt động</span>
                                    </td>
                                    <td>Xoá/sửa</td>
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

export default ProductDataTable;