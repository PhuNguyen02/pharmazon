import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '../../../../component/searchBar/SearchBar';
import { useState } from 'react';
import SearchResultsList from '../../../../component/searchResults/SearchResultsList';
import { useSelector } from 'react-redux';
const Header = () => {
    const [results, setResults] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'))
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('user')
        navigate("/")
    }
    return (
        <div>
            <header>
                <div className="header-heading" />
                <div className="header-wrapper">
                    <div className="logo">
                        <Link to={"/"}>
                            <img src="/assets/img/logoDO.png" alt="" />
                        </Link>
                    </div>
                    <div className='search-container'>

                        <SearchBar setResults={setResults} />
                        {results && results.length > 0 && <SearchResultsList results={results} />}
                    </div>
                    <div className="right-side">
                        <div className="login">
                            <i className="fa-solid fa-user" />
                            {user === null ? (<Link to="/dangnhap">Đăng nhập</Link>) : user?.data?.data?.map((item) => (
                                <>
                                    <Link to="/dangnhap">{item.full_name}</Link>
                                    <div className="logout">
                                        <Link to="">Quản lý tài khoản</Link> <br/>
                                        <Link to="" class="logoutclick" onClick={handleLogout}>Đăng xuất</Link>
                                    </div>
                                </>
                            ))}

                        </div>
                        <div className="cart">
                            <i className="fa-solid fa-cart-shopping" />
                            <a href="">Giỏ hàng</a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;