import React from 'react'
import { Link } from 'react-router-dom'
import style from './home.module.css'

const Home = () => {
    return (
        <>
            <section className={style.sectionContainer}>
                <h2>
                    Your favorite comic book store ✨
                </h2>
                <div className={style.pHome}>
                    <p>
                        Explore our catalog to live the adventure of your life
                    </p>
                </div>
                <Link
                    className={style.btnHome}
                >
                    Let's go!
                </Link>
            </section>
            <div className={style.infoContainer}>
                <div className={style.infoComic}>
                    <div className={style.infoDetail}>
                        <img className={style.portada} src="./myHeroAcademyPortada.png" alt="" />
                        <div className={style.description}>
                            <p className={style.comicTitle}>My Hero Academia</p>
                            <p className={style.comicCategory}>Manga</p>
                            <p className={style.comicDescription}>In a world in which most of the population is born with a Gift, a different extraordinary ability in each one, it didn't take long for both villains and heroes to appear ready to stop them.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home