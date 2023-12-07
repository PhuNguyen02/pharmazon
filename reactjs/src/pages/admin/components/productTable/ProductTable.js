import React from 'react';
import './productTable.css'
const ProductTable = () => {
    return (
        <>
            <div className='product-order-table-container'>
                <div className='product-order-table-header'>
                    <h2 className='poduct-order-table-title'>
                        Danh sách đơn hàng
                    </h2>
                    <div className='poduct-order-table-toolbar'>

                    </div>
                </div>
                <div className='product-order-table-body'>
                    <div className='poduct-order-table-wrapper'>
                        <table className='poduct-order-table-data'>
                            <thead>
                                <tr>
                                    <th rowSpan={1} colSpan={1}>ID</th>
                                    <th rowSpan={1} colSpan={1}>Ngày tạo</th>
                                    <th rowSpan={1} colSpan={1}>Khách hàng</th>
                                    <th rowSpan={1} colSpan={1}>Tổng tiền</th>
                                    <th rowSpan={1} colSpan={1}>Lợi nhuận</th>
                                    <th rowSpan={1} colSpan={1}>Trạng thái</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className='odd'>
                                    <td>1</td>
                                    <td>7 phút trước</td>
                                    <td>Phú Nguyễn</td>
                                    <td>300.000 vnđ</td>
                                    <td>180.000 vnđ</td>
                                    <td>
                                        <span className='success'>Hoàn thành</span>
                                    </td>
                                </tr>
                                <tr className='even'>
                                    <td>2</td>
                                    <td>15 phút trước</td>
                                    <td>Hoàn Tấn</td>
                                    <td>300.000 vnđ</td>
                                    <td>180.000 vnđ</td>
                                    <td>
                                        <span className='warning'>Chờ xác nhận</span>
                                    </td>
                                </tr>
                                <tr className='odd'>
                                    <td>3</td>
                                    <td>50 phút trước</td>
                                    <td>Dũng Nguyễn</td>
                                    <td>300.000 vnđ</td>
                                    <td>180.000 vnđ</td>
                                    <td>
                                        <span className='success'>Hoàn thành</span>
                                    </td>
                                </tr>
                                <tr className='even'>
                                    <td>4</td>
                                    <td>1 giờ trước</td>
                                    <td>Phạm Văn A</td>
                                    <td>300.000 vnđ</td>
                                    <td>180.000 vnđ</td>
                                    <td>
                                        <span className='danger'>Huỷ đơn hàng</span>
                                    </td>
                                </tr>
                                <tr className='odd'>
                                    <td>5</td>
                                    <td>2 giờ trước</td>
                                    <td>Hoàng Anh</td>
                                    <td>300.000 vnđ</td>
                                    <td>180.000 vnđ</td>
                                    <td>
                                        <span className='primary'>Đang giao hàng</span>
                                    </td>
                                </tr>
                                <tr className='even'>
                                    <td>6</td>
                                    <td>2 giờ trước</td>
                                    <td>Phú Nguyễn</td>
                                    <td>300.000 vnđ</td>
                                    <td>180.000 vnđ</td>
                                    <td>
                                        <span className='success'>Hoàn thành</span>
                                    </td>
                                    </tr>
                                <tr className='odd'></tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductTable;