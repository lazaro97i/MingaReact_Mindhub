import { configureStore } from '@reduxjs/toolkit'
import authorReducer from './authors/reducers'
import companyReducer from './companies/reducer'

const store = configureStore ({
    reducer: {
        author: authorReducer,
        company: companyReducer
    }
})

export default store