import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = process.env.REACT_APP_API_URL

const getCategories = createAsyncThunk('categories/getCategory', async() => {
    try{
        const response = await axios.get(
            `${API_URL}/categories`
        )
        return{
            categories: response.data,
            message: 'Categories found'
        }
    }
    catch(error){
        console.log(error)
        return{
            categories: null,
            message: error.message
        }
    }
})

const categoryActions = {
    getCategories
}

export default categoryActions