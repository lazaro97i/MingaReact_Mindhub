import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = process.env.REACT_APP_API_URL

const createAuthor = createAsyncThunk('authors/createAuthor', async(data) => {
    try{
        const response = await axios.post(
            `${API_URL}/authors`,
            data
        )
        return{
            author: response.data,
            message: 'Author created successfully'
        }
    }
    catch(error){
        console.log(error)
        return{
            author: null,
            message: [error.response.data.message]
        }
    }
})
const getAuthors = createAsyncThunk('authors/getAuthors', async() => {
    try{
        const response = await axios.get(
            `${API_URL}/authors`
        )
        return{
            authors: response.data,
            message: 'Authors found'
        }
    }
    catch(error){
        console.log(error)
        return{
            authors: null,
            message: error.message
        }
    }
})

const authorActions = {
    createAuthor,
    getAuthors
}

export default authorActions