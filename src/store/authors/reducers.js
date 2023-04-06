import authorActions from './actions'
import { createReducer } from '@reduxjs/toolkit'

const {createAuthor, getAuthors} = authorActions

const initialState = {
    author: [],
    authors: [],
    message: []
}

const authorReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(createAuthor.fulfilled, (state, action) => {
            let newState = {
                author: action.payload.author,
                authors: action.payload.authors,
                message: [action.payload.message]
            }
            return newState
        })
        .addCase(getAuthors.fulfilled, (store, action) => {
            let newState = {
                author: action.payload.author,
                authors: action.payload.authors,
                message: action.payload.message
            }
            return newState
        })
})

export default authorReducer