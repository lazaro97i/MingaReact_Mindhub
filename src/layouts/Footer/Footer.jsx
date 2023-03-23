import React from 'react'
import style from './footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className={style.subscribeContainer}>
                <img className={style.imgFooter} src="./footer_img.png" alt="" />
                <div className={style.subscribe}>
                    <div>
                        <p>Subscribe</p>
                    </div>
                    <div className={style.inp}>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder='Enter your email'
                            className={style.email}
                        />
                        <Link
                            className={style.send}
                        >
                            Subscribe
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.infoContainer}>
                <div className={style.btnFooter}>
                    <Link className={style.btn}>
                        Home
                    </Link>
                    <Link className={style.btn}>
                        Comics
                    </Link>
                </div>
                <div className={style.logoFooter}>
                    <img src="./LogoMinga.png" alt="" />
                </div>
                <div className={style.contact}>
                    <div className={style.sNetworks}>
                        <Link to={'https://facebook.com'}>
                            <img className={style.linkNet} src="./fb.svg" alt="" />
                        </Link>
                        <Link to={'https://twitter.com'}>
                            <img className={style.linkNet} src="./tw.svg" alt="" />
                        </Link>
                        <Link to={'https://vine.com'}>
                            <img className={style.linkNet} src="./vine.svg" alt="" />
                        </Link>
                        <Link to={'https://youtube.com'}>
                            <img className={style.linkNet} src="./yt.svg" alt="" />
                        </Link>
                    </div>
                    <Link
                        className={style.donate}
                        to='/'
                    >
                        Donate ♡
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Footer