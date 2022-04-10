import React from 'react';

import { Outlet } from 'react-router-dom';
import { Header } from '../../components';
import { Footer } from '../../components';

export function Layout() {
    return (
        <React.Fragment>
            <Header />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}