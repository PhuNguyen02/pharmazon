import React from 'react';
import { useEffect } from 'react';
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
                <div className='header-section'>{props.title}</div>
                <div className='header-info'>
                    
                    <div className='header-admin-name'>
                        <div>xin chao Phu</div>
                    </div>
                    <div className='header-admin-avartar'>
                        <img src='https://picsum.photos/40' />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Header;