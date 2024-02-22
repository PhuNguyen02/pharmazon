import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './productTable.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchProductList } from "../../../../redux/api/productListAPI";
import { Col, Container, Row } from "react-bootstrap";
import Pagination from 'react-bootstrap/Pagination';
import axios from 'axios'
const ProductDataTable = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const products = useSelector(state => state.producsList)
    const [productAPI, setProductAPI] = useState([]);
    const [paginations, setPaginations] = useState([]);
    const [active, setActive] = useState(1);
    const [limit, setLimit] = useState(4);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/allProducts?limit=${limit}&page=1`)
          .then(res => {
           const page = Math.ceil( res.data.count /limit ); 
           console.log('page', page)
           let pages= [ ]
           for(let i = 1 ; i <= page ; i++){
            pages.push(i)
           }
            setPaginations(pages)
            setProductAPI(res.data.data)
          })
          .catch(error => console.log(error));
      }, [])
    const onLoadPagination =  async (page) =>{
        setActive(page)
        await axios.get(`http://localhost:8000/api/products/allProducts?limit=${limit}&page=`+ page)
        .then(res => {
            setProductAPI(res.data.data)
        }).catch(error => console.log(error));
        console.log(page);
    }
    console.log(productAPI);
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
                                {productAPI?.map((item) => (
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
                        <Pagination>
                            {paginations?.map((item) => (
                                <Pagination.Item key={1} active={item === active} onClick={() => { onLoadPagination(item) }}> {item} </Pagination.Item>
                            ))}
                        </Pagination>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDataTable;