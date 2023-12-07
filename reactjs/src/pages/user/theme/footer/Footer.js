import React from 'react';
import "../../../../styles/footer/footer.css"
const Footer = () => {
    return (
        <footer>
            <div className="footer-header"></div>
            <div className="footer-main">
                <div className="footer-main-container">
                    <div className="footer-main-content">
                        <div className="footer-left-side">
                            <span className="about">
                                <h4>Về chúng tôi</h4>
                                <ul className="list-link">
                                    <li>
                                        <a href="">Giới thiệu</a>
                                    </li>
                                    <li>
                                        <a href="">Giấp phép kinh doanh</a>
                                    </li>
                                    <li>
                                        <a href="">Điều khoản</a>
                                    </li>
                                    <li>
                                        <a href="">Chính sách bảo mật</a>
                                    </li>
                                    <li>
                                        <a href="">Kênh dược sĩ</a>
                                    </li>
                                    <li>
                                        <a href="">Tuyển dụng</a>
                                    </li>
                                </ul>
                            </span>
                            <span className="about">
                                <h4>Thực phẩm chức năng</h4>
                                <ul className="list-link">
                                    <li>
                                        <a href="">Sinh lý - Nội tiết tố</a>
                                    </li>
                                    <li>
                                        <a href="">Cải thiện tăng cường chức năng</a>
                                    </li>
                                    <li>
                                        <a href="">Vitamin và khoáng chất</a>
                                    </li>
                                    <li>
                                        <a href="">Hỗ trợ điều trị</a>
                                    </li>
                                    <li>
                                        <a href="">Sức khoẻ tim mạch</a>
                                    </li>
                                    <li>
                                        <a href="">Thần kinh não</a>
                                    </li>
                                    <li>
                                        <a href="">Hỗ trợ tiêu hoá</a>
                                    </li>
                                    <li>
                                        <a href="">Hỗ trợ tim mạch</a>
                                    </li>
                                    <li>
                                        <a href="">Dinh dưỡng</a>
                                    </li>
                                </ul>
                            </span>
                            <span className="about">
                                <h4>Danh mục</h4>
                                <ul className="list-link">
                                    <li>
                                        <a href="">Thực phẩm chức năng</a>
                                    </li>
                                    <li>
                                        <a href="">Dược mỹ phẩm</a>
                                    </li>
                                    <li>
                                        <a href="">Chăm sóc cá nhân</a>
                                    </li>
                                    <li>
                                        <a href="">Tra cứu bệnh</a>
                                    </li>
                                    <li>
                                        <a href="">Thuốc</a>
                                    </li>
                                    <li>
                                        <a href="">Thiết bị y tế</a>
                                    </li>
                                    <li>
                                        <a href="">Bệnh</a>
                                    </li>
                                    <li>
                                        <a href="">Góp sức khoẻ</a>
                                    </li>
                                    <li>
                                        <a href="">trung tâm vắc xin</a>
                                    </li>
                                </ul>
                            </span>
                        </div>
                        <div className="footer-right-side">
                            <h4>Kết nối với chúng tôi</h4>
                            <ul>
                                <li>
                                    <a href="">
                                        <i className="fa-brands fa-facebook-f" />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa-brands fa-square-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <i className="fa-brands fa-linkedin" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>2022 YourDoctor</p>
                <div className="info-com">
                    <p>Địa chỉ: 123 Nguyễn Hữu Thọ,P. Hoà Thuận, Q. Hải Châu, TP. Đà Nẵng</p>
                    <p>Số điện thoại: (+84) 123456789</p>
                    <p>Email: Yourdoctor@support.com</p>
                    <p>Người quản lý nội dung: Nguyễn Hải Phú</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;