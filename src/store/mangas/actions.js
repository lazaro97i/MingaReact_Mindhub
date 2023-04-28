import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

const API_URL = process.env.REACT_APP_API_URL

const createManga = createAsyncThunk('mangas/createManga', async(data) => {
    try{
        const response = await axios.post(
            `${API_URL}/mangas`,
            data
        )
        return{
            manga: response.data,
            message: 'Manga created successfully'
        }
    }
    catch(error){
        console.log(error)
        return{
            manga: null,
            message: error.response.data.message
        }
    }
})

const mangasAction = {
    createManga
}

export default mangasAction