import React from 'react';
import './recentOrder.css'
const RecentOrders = () => {
    return (
        <>
        <div className='recent-order-container'>
            <div className='recent-order-wrapper'>
                <div className='recent-order-header'>
                    <h2>Danh sách đơn hàng gần đây</h2>
                </div>
                <div className='recent-order-table'>
                    <div className='recent-order-data'>
                        <table>
                            <thead>
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th></th>
                                    <th>Số lượng</th>
                                    <th>Giá tiền</th>
                                    <th>Tổng tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img src='https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09552_0c388aabb0.jpg'></img>
                                    </td>
                                    <td>
                                        <a href=''>Viên uống hỗ trợ tăng cường...</a>
                                        <span></span>
                                    </td>
                                    <td>
                                        <span>x1</span>
                                    </td>
                                    <td>
                                        <span>200.000đ</span>
                                    </td>
                                    <td>200.000đ</td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src='https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09552_0c388aabb0.jpg'></img>
                                    </td>
                                    <td>
                                        <a href=''>Viên uống hỗ trợ tăng cường...</a>
                                        <span></span>
                                    </td>
                                    <td>
                                        <span>x1</span>
                                    </td>
                                    <td>
                                        <span>200.000đ</span>
                                    </td>
                                    <td>200.000đ</td>
                                </tr>
                                <tr>
                                    <td>
                                        <img src='https://cdn.nhathuoclongchau.com.vn/unsafe/256x256/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09552_0c388aabb0.jpg'></img>
                                    </td>
                                    <td>
                                        <a href=''>Viên uống hỗ trợ tăng cường...</a>
                                        <span></span>
                                    </td>
                                    <td>
                                        <span>x1</span>
                                    </td>
                                    <td>
                                        <span>200.000đ</span>
                                    </td>
                                    <td>200.000đ</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default RecentOrders;