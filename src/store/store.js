import { configureStore } from '@reduxjs/toolkit'
import authorReducer from './authors/reducers'
import companyReducer from './companies/reducer'
import categoryReducer from './categories/reducer'
import mangasReducer from './mangas/reducer'

const store = configureStore ({
    reducer: {
        author: authorReducer,
        company: companyReducer,
        category: categoryReducer,
        manga: mangasReducer
    }
})

export default store