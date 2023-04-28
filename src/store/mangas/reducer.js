import mangasAction from "./actions"
import { createReducer } from "@reduxjs/toolkit"

const { 
    createManga
} = mangasAction

let initialState = {
    manga: [],
    mangas: [],
    message: []
}

const mangasReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(createManga.fulfilled , (state, action) => {
            let newState = {
                manga: action.payload.manga,
                mangas: action.payload.mangas,
                message: action.payload.message
            }
            return newState
        })
})

export default mangasReducer