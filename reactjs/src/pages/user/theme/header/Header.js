import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../../../component/searchBar/SearchBar';
import { useState } from 'react';
import SearchResultsList from '../../../../component/searchResults/SearchResultsList';
const Header = () => {
    const [results, setResults] = useState([]);
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

                       <SearchBar  setResults={setResults}/>
                       {results && results.length > 0 && <SearchResultsList results={results} />}
                        </div>
                        <div className="right-side">
                            <div className="login">
                                <i className="fa-solid fa-user" />
                                <Link to = "/dangnhap">Đăng nhập</Link>
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