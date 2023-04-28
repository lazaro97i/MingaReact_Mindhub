import React, { useEffect, useRef } from 'react'
import style from './formNewManga.module.css'
import { useDispatch, useSelector } from 'react-redux'
import categoryActions from '../../store/categories/actions'
import mangaActions from '../../store/mangas/actions'
import { Toaster, toast } from 'react-hot-toast'

const { getCategories } = categoryActions
const { createManga } = mangaActions

const FormNewManga = () => {

    const dispatch = useDispatch()
    const categoriesStore = useSelector((store) => store.category)
    const mangaStore = useSelector((store) => store.manga)

    let inpTitle = useRef("")
    let inpCat = useRef("")
    let inpDesc = useRef("")
    let inpPhoto = useRef("")

    const successAlert = () => {
        toast.success('Manga created successfully',{
        autoClose: 3000
    })}

    const errorAlert = () => {
        mangaStore?.message?.map((err) =>(
            toast.error(err.message, {autoClose: 3000}
        )))
    }

    useEffect(()=> {
        if(categoriesStore?.categories.length === 0){
            dispatch(getCategories())
        }
    }, [])

    const sendManga = (e) => {
        e.preventDefault()
        const data = {
            title: inpTitle.current.value,
            category_id: inpCat.current.value,
            description: inpDesc.current.value,
            cover_photo: inpPhoto.current.value,
            author_id: '64487272a7bb974d14860ff9'
        }
        dispatch(createManga(data))
    }

    useEffect(()=>{ 
        if(mangaStore?.manga?.success === true){
            successAlert()
        }else{
            errorAlert()
        }
    }, [sendManga])


    return (
        <>
        <Toaster />
            <div className={style.container}>
                <div className={style.title}>
                    <p>New Manga</p>
                </div>
                <div className={style.containForm}>
                    <form action="" className={style.form} onSubmit={sendManga}>
                        <input 
                        type="text" 
                        placeholder='Insert Title'
                        name='title'
                        className={style.inpForm}
                        ref={inpTitle}
                        />
                        <select 
                        className={style.inpSelect}
                        name="category"
                        id=""
                        ref={inpCat}
                        >
                            <option disabled selected>Insert Category</option>
                            {
                                categoriesStore?.categories?.response?.map((cat) => (
                                    <option 
                                    key={cat.name} 
                                    value={cat._id}>{cat.name}
                                    </option>
                                ))
                            }
                        </select>
                        <input 
                        type="text" 
                        placeholder='Insert Description'
                        name='description'
                        className={style.inpForm}
                        ref={inpDesc}
                        />
                        <input 
                        type="url" 
                        placeholder='Insert Cover Photo'
                        name='cover photo'
                        className={style.inpForm}
                        ref={inpPhoto}
                        />
                        <button
                        type='submit'
                        className={style.send}>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormNewManga