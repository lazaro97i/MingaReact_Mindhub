import React, { useRef, useEffect } from 'react'
import style from './formNewCompany.module.css'
import { useDispatch, useSelector } from 'react-redux'
import companyActions from '../../store/companies/actions'
import { Toaster, toast } from 'react-hot-toast'

const { createCompany } = companyActions

const FormNewCompany = () => {

    const dispatch = useDispatch()
    const companyStore = useSelector((store) => store.company)
    let inpName = useRef('')
    let inpLogo = useRef('')
    let inpWeb = useRef('')
    let inpDesc = useRef('')

    const successAlert = () =>{
        toast.success('Company created successfully', {
            autClose: 3000
        })
    }
    const errorAlert = () => {
        companyStore?.message?.map((err) => 
            err.map((msj) => 
                toast.error(msj.message, {autoClose: 3000})
            )
        )
    }

    const sendCompany = (e) => {
        e.preventDefault()
        const data = {
            name: inpName.current.value,
            logo: inpLogo.current.value,
            website: inpWeb.current.value,
            description: inpDesc.current.value,
            user_id: '6414c441f8845dbab347bde9'
        }
        dispatch(createCompany(data))
    }

    useEffect(()=>{ 
        if(companyStore?.company?.success === true){
            successAlert()
        }else{
            errorAlert()
        }
    }, [sendCompany])

    return (
        <>
        <Toaster/>
            <div className={style.container}>
                <div className={style.title}>
                    <p>New Company</p>
                    <img src="./perfil.png" alt="" />
                </div>
                <div className={style.containForm}>
                    <form action="" className={style.form} onSubmit={sendCompany}>
                        <input 
                        type="text" 
                        placeholder='Name'
                        name='name'
                        className={style.inpForm}
                        ref={inpName}
                        />
                        <input 
                        type="url" 
                        placeholder='Logo'
                        name='logo'
                        className={style.inpForm}
                        ref={inpLogo}
                        />
                        <input 
                        type="text" 
                        placeholder='WebSite'
                        name='website'
                        className={style.inpForm}
                        ref={inpWeb}
                        />
                        <input 
                        type="text" 
                        placeholder='Description'
                        name='description'
                        className={style.inpForm}
                        ref={inpDesc}
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

export default FormNewCompany