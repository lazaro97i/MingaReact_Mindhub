import React, { useState } from 'react'
import style from './nav.module.css'
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'

const Nav = () => {

    const [activeMenu, setActiveMenu] = useState(false)

    const routes = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/new-author',
            name: 'New Author'
        },
        {
            path: '/new-company',
            name: 'New Company'
        },
        {
            path: '/new-manga',
            name: 'New Manga'
        }
    ]

    const togleMenu = () => {
        setActiveMenu(!activeMenu)
    }

    return (
        <>
            <div className={style.menuContainer}>
                <svg
                    className={style.iconMenu}
                    onClick={togleMenu}
                    width="35"
                    height="35"
                    viewBox="0 0 31 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M2 3H28"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className={style.menuPart}
                    />
                    <path d="M2 13H28"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className={style.menuPart}
                    />
                    <path d="M2 23H28"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className={style.menuPart}
                    />
                </svg>
                <Link to={'/'}>
                    <img src="./LogoMinga.png" alt="Logo Minga" className={style.logoMinga} />
                </Link>
            </div>
            <Menu
                handleClick={togleMenu}
                isOpen={activeMenu}
                routes={routes}
            />
        </>
    )
}

export default Nav