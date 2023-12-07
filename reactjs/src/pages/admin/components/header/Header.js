import React from 'react';
import { useEffect } from 'react';
import './header.css'
const Header = (props) => {
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const header = document.querySelector('.header-section-container');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };
    return (
        <>
            <div className='header-section-container'>
            <h1 className='header-section'>{props.title}</h1>
            </div>
            </>
    );
};

export default Header;