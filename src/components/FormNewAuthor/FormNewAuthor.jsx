import React, { useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import authorActions from '../../store/authors/actions.js'
import { Toaster, toast } from 'react-hot-toast'
import style from './fromNewAuthor.module.css'

const { createAuthor } = authorActions

const FormNewAuthor = () => {

    const storeAuthor = useSelector((store) => store.author)
    const dispatch = useDispatch()

    let inpName = useRef(null)
    let inpLast_name = useRef(null)
    let inpCity = useRef(null)
    let inpCountry = useRef(null)
    let inpDate = useRef(null)
    let inpPhoto = useRef(null)

    const successAlert = () => {
        toast.success('Author created successfully', {
            autoClose: 3000
        })
    }
    const errorAlert = () => {
        storeAuthor?.message[0]?.map((err) => 
            err.map((msj) => 
                toast.error(msj.message, {autoClose: 3000})
            )
        )
    }

    const sendAuthor = (e) => {
        const data = {
            name: inpName.current.value,
            last_name: inpLast_name.current.value,
            city: inpCity.current.value,
            country: inpCountry.current.value,
            date: inpDate.current.value,
            photo: inpPhoto.current.value,
            user_id: '6414c441f8845dbab347bde9'
        }

        dispatch(createAuthor(data))
    }
    
    useEffect(()=>{ 
        if(storeAuthor?.author?.success === true){
            successAlert()
        }else{
            errorAlert()
        }
    }, [sendAuthor])
    

    return (
        <>
        <Toaster/>
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
                        className={style.Last_name}
                        placeholder="Last Name"
                        ref={inpLast_name}
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
                        name="profilePhoto"
                        className={style.profilePhoto}
                        placeholder="URL Profile Photo"
                        ref={inpPhoto}
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