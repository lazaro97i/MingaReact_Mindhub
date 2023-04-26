import React from 'react'
import { Link } from 'react-router-dom'
import style from './menu.module.css'

const Menu = ({
    handleClick,
    isOpen,
    routes
}) => {
    return (
        <>
            <nav className={`${style.nav} ${isOpen ? null : style.navClose}`} >
                <div className={style.cancelContainer}>
                    <img onClick={handleClick} className={style.cancel} src="./cancel_ico.svg" alt="" />
                </div>
                <div className={style.routes}>
                    <ul className={style.ulRoutes}>
                        <li className={style.liRoutes}>
                            {
                                routes.map((route) => (
                                    <Link 
                                    to={route.path} 
                                    className={style.liItem}
                                    key={route.path}
                                    >
                                        {route.name.toUpperCase()}
                                    </Link>
                                ))
                            }
                        </li>
                    </ul>
                </div>
            </nav>
            <div 
            className={`${style.bgNav} ${isOpen ? null : style.bgNavClose}`}
            onClick={handleClick}
            >
            </div>
        </>
    )
}

export default Menu