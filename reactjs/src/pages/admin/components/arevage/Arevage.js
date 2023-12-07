import React from 'react';
import './arevage.css'
const Arevage = () => {
    return (
        <div className='arevage-container'>
                <div className='sales-arevage arevage-block'>
                    <div className='arevage-icon'>

                    </div>
                    <div className='arevage-title '>
                        <h3>Total Sales</h3>
                    </div>
                    <div className='counter'>
                        <p>200.000.000 vnd</p>
                    </div>
                </div>
                <div className='orders-arevage arevage-block'>
                    <div className='arevage-icon'>

                    </div>
                    <div className='arevage-title'>
                        <h3>Total Orders</h3>
                    </div>
                    <div className='counter'>
                        <p>200.000.000 vnd</p>
                    </div>
                </div>
                <div className='revenue-arevage arevage-block'>
                    <div className='arevage-icon'>

                    </div>
                    <div className='arevage-title'>
                        <h3>Total Revenue</h3>
                    </div>
                    <div className='counter'>
                        <p>200.000.000 vnd</p>
                    </div>
                </div>
            </div> 
    );
};

export default Arevage;