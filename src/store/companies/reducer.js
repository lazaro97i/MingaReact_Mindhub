import companyActions from './actions.js'
import { createReducer } from '@reduxjs/toolkit'

const { createCompany } = companyActions

const initialState = {
    company: [],
    message: []
}

const companyReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(createCompany.fulfilled, (state, action) => {
            let newState = {
                company: action.payload.company,
                message: action.payload.message
            }
            return newState
        })
})

export default companyReducer