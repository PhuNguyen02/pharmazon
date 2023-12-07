import React from 'react';
import "../../../styles/cart/cart.css"
import {useSelector } from 'react-redux/es/hooks/useSelector';
const Cart = () => {
    const cart = useSelector((state) => state.cart)
    console.log(cart)
    return (
        <div className="container">
            <div className="cart-wrapper">
                        <div className="list-cart">
                        <a href="" className="cart-item">
                            <img src="https://cdn.nhathuoclongchau.com.vn/unsafe/256x256…od.s3-sgn09.fptcloud.com/DSC_09709_919fd2350c.jpg" alt="" />
                        </a>
                        <div className="cart-body">
                            <div className="cart-selector">
                                <h3 className="product-title">
                                Viên uống proMUM New Live bổ sung các chất dinh dưỡng cho phụ nữ mang thai và cho con bú (2 vỉ x 15 viên)
                                </h3>
                                <div className="price">
                                    <p>
                                    319.000đ
                                    </p>
                                </div>
                                <div className="quantity">
                                    <input
                                        type="number"
                                        id="quantity"
    
                                        defaultValue=""
                                    />
                                </div>
                                <button>
                                    <i
                                        className="fa-solid fa-trash deleteProduct"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    
                
               

            </div>
            <div className="payment-product">
                <div className="cart-total-title">
                    <h3>Tổng tiền</h3>
                </div>
                <div className="price-item">
                    <h1> 319.000đ</h1>
                </div>
                <div className="pay-btn">
                    <button>Thanh toán</button>
                </div>
            </div>
        </div>

    );
};

export default Cart;