import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import {fetchProductList} from "../../../redux/api/productListAPI"
import './categoryPage.css'
const CategoryPage = () => {
    const navigate = useNavigate()
    const products = useSelector(state => state.producsList)
    const dispatch = useDispatch()
    const handleDetail = (product) => {
        navigate("sanpham/" + product.id + "/" + product.title)
    };
    useEffect(() => {
        dispatch(fetchProductList())
    }, [])
    return (
        <div>
            <div className='container'>
                <div className="title">
                    {/* <h1>{}</h1> */}
                </div>
                <div className='productOfCategory'>
                    <div className="product-list">
                        {
                        products.data?.filter(item => item.category == "vitamin").map(item => (
                        <div className="product-card">
                            <a>
                                <img src={item.img} />
                            </a>
                            <div className="product-content">
                                <div className="name-product">
                                    <a className="showDetail" onClick={() => {
                                        handleDetail(item);
                                    }}>
                                        {item.title}
                                    </a>
                                </div>
                                <div className="product-price">
                                    <span>
                                        {item.price}
                                        <span>{item.unit}</span>
                                    </span>
                                </div>
                                <div className="product-info">
                                    <a>
                                        {item.quantityofunit}
                                    </a>
                                </div>
                            </div>
                        </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CategoryPage;