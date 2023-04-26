import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = process.env.REACT_APP_API_URL

const createCompany = createAsyncThunk( 'companies/createCompany', async (data) => {
    try{
        const response = await axios.post(
            `${API_URL}/companies`,
            data
        )
        return{
            company: response.data,
            message: 'Company created successfully'
        }
    }
    catch(error){
        console.log(error)
        return{
            company: null,
            message: [error.response.data.message]
        }
    }
})


const companyActions = {
    createCompany
}

export default companyActions