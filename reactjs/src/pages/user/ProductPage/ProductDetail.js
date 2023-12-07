import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import "../../../styles/detailProduct/detailproduct.css"
import { addToCart } from '../../../redux/reducer/cartSlice';
const ProductDetail = () => {
    let { id } = useParams();
    const products = useSelector(state => state.producsList)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [product, setProduct] = useState(null)
    useEffect(() => {
      if (id) {
        const item = products.data?.find((x) => Number(x.id) === Number(id));
        if (item) {
            setProduct(item)
        }
      }
    }, []);
    const handleAddtoCart = (product) => {
        dispatch(addToCart(product))
    }
    return (
        <div className="container">
            {
                product && (
                    <div className="detail-infomation">
                        <div className="detail-infomatio-left">
                            <div className="img-info-container">
                                <div className="carasel-gallery">
                                    <div className="slider-gallery-area">
                                        <img src={product.img} />
                                    </div>
                                    <div className="button-area">
                                        <div className="previous-btn">
                                            <i className="fa-solid fa-chevron-left" />
                                        </div>
                                        <div className="next-btn">
                                            <i className="fa-solid fa-chevron-right" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="detail-infomation-right">
                            <div className="brand-name">
                                <span>Thương hiệu: </span>
                                <span>
                                    <a href="">Bounty</a>
                                </span>
                            </div>
                            <div className="product-name">
                                <span>
                                    <h3>
                                        {product.title}
                                    </h3>
                                </span>
                            </div>
                            <div className="product-price">
                                <span>
                                    {product.price}
                                </span>
                                <span> / </span>
                                <span>Hộp</span>
                            </div>
                            <table className="content-list">
                                <tbody>
                                    <tr className="unit">
                                        <td>Đơn vị tính</td>
                                        <td>
                                            <p>
                                                {product.unit}
                                            </p>
                                        </td>
                                    </tr>
                                    <tr className="category">
                                        <td>
                                            <p>Danh mục</p>
                                        </td>
                                        <td>
                                            <a href="">Vitamin</a>
                                        </td>
                                    </tr>
                                    <tr className="quantityOfUnit">
                                        <td>Quy cách</td>
                                        <td>
                                            {product.quantityofunit}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="addToCart">
                                <div className="quantityToCart">
                                    <span>Chọn số lượng</span>
                                    <div className="quantityInput">
                                        <input type="number" min={1} max={9999} defaultValue={1} />
                                    </div>
                                    <span className="quantityInStock">
                                        <p>
                                            Hiện đang có {product.quantityOfStock} sản phẩm
                                        </p>
                                    </span>
                                </div>
                            </div>
                            <div className="button-addtocart-Area">
                                <div className="btn-addToCart">
                                    <button className="AddToCart-button" onClick={() => {
                                        handleAddtoCart(product);
                                    }}>
                                        Thêm vào giỏ hàng
                                    </button>
                                </div>
                                <div className="btn-placePharmacist">
                                    <button>Nhà thuốc của dược sĩ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
       </div>
    );
};
export default ProductDetail;