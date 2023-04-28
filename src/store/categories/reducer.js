import categoryActions from "./actions"
import { createReducer } from "@reduxjs/toolkit"

const { getCategories } = categoryActions

const initialState = {
    category: [],
    categories: [],
    message: []
}

const categoryReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(getCategories.fulfilled, (state, action) => {
            let newState = {
                category: action.payload.category,
                categories: action.payload.categories,
                message: action.payload.message
            }
            
            return newState
        })
})

export default categoryReducer