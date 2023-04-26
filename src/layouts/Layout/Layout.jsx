import React, { useEffect } from 'react'
import { Outlet } from "react-router-dom"
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

const Layout = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout