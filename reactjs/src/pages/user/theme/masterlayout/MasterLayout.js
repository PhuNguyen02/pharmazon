import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Menubar from '../../../../component/menuBar/Menubar';
import { Route } from 'react-router-dom';
function MasterLayout({ component: Component, ...props }) {
    return (
        <Route
            {...props}
            render={(routerProps) => {
                    return (
                        <>
                            <Header/>
                            <Menubar />
                                <Component {...routerProps} />
                            <Footer />
                           
                        </>
                    );
            }}
        />
    );
}

export default MasterLayout;