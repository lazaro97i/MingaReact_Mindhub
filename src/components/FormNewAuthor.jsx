import React, { useRef } from 'react'
import style from './fromNewAuthor.module.css'

const FormNewAuthor = () => {

    let inpName = useRef('')
    let inpLastName = useRef('')
    let inpCity = useRef('')
    let inpCountry = useRef('')
    let inpDate = useRef('')
    let inpImage = useRef('')

    const sendAuthor = (e) => {
        const data = {
            name: inpName.current.value,
            lastName: inpLastName.current.value,
            city: inpCity.current.value,
            country: inpCountry.current.value,
            date: inpDate.current.value,
            image: inpImage.current.value
        }
        console.log(data);
    }

    return (
        <>
            <div className={style.container}>
                <p>New Author</p>
                <img className={style.imgProfile} src="./myHeroAcademyPJ.png" alt='' />
                <form onSubmit={sendAuthor} className={style.form} action=""> 
                    <input
                        type="text"
                        name="name"
                        className={style.name}
                        placeholder="Name"
                        ref={inpName}
                    />
                    <input
                        type="text"
                        name="last-name"
                        className={style.lastName}
                        placeholder="Last Name"
                        ref={inpLastName}
                    />
                    <input
                        type="text"
                        name="city"
                        className={style.city}
                        placeholder="City"
                        ref={inpCity}
                    />
                    <input
                        type="text"
                        name="country"
                        className={style.country}
                        placeholder="Country"
                        ref={inpCountry}
                    />
                    <input
                        type="date"
                        name="date"
                        className={style.date}
                        ref={inpDate}
                    />
                    <input
                        type="url"
                        name="profileImg"
                        className={style.profileImg}
                        placeholder="URL Profile Image"
                        ref={inpImage}
                    />
                    <button 
                    type='submit' 
                    className={style.send}>Send</button>
                </form>
            </div>
        </>
    )
}

export default FormNewAuthor