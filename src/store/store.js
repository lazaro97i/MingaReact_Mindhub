import { configureStore } from '@reduxjs/toolkit'
import authorReducer from './authors/reducers'

const store = configureStore ({
    reducer: {
        author: authorReducer
    }
})

export default store