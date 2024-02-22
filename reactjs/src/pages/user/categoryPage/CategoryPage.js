import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { fetchProductListCategory } from "../../../redux/api/productListAPI";
import './categoryPage.css'
import { fetchCategoryList } from "../../../redux/api/categoryAPI";
const CategoryPage = () => {
    const navigate = useNavigate()
    const products = useSelector(state => state.producsList)
    console.log(products);
    const category = useSelector(state => state.categoryList)
    const dispatch = useDispatch()
    useEffect(() => {
        let params = {
            category: "thankinhnao"
        }
        dispatch(fetchProductListCategory(params))
    }, [])

    useEffect(() => {
        dispatch(fetchCategoryList())
    }, [])

    const filterButtons = [
        "100.000đ",
        "100.000đ đến 300.000đ",
        " 300.000đ đến 500.000đ",
        "Trên 500.000đ"
    ];

    // const filteredProduct = useSelector((state) => state)
    return (
        <div>
            <div className='container'>
                <div className="title">
                    <h1>Tên danh mục</h1>
                    <div className="filter-container">
                        <div className="filter-wrapper">
                            <div className="header-filter-wrapper">

                            </div>
                            <div className="body-filter-wrapper">
                                <div className="filter-category-body">
                                    <select>
                                        {category?.categoryData?.categories?.map(category => (
                                            <option value={category.category_name} >{category.category_name}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="filter-price-body">
                                    {filterButtons.map((button, key) => (
                                        <button 
                                        key={key}
                                        onClick={() => dispatch(filterButtons(button.toLocaleLowerCase()))}
                                        >{button}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='productOfCategory'>
                    <div className="product-list">
                        {
                            products?.categoryProductData?.products?.map((item) => (
                                <div className="product-card">
                                    <a>
                                        <img src={item.img} />
                                    </a>
                                    <div className="product-content">
                                        <div className="name-product">
                                            <a className="showDetail" onClick={() => {

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