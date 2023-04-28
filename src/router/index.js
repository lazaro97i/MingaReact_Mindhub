import { createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout/Layout"
import Home from "../pages/Home/Home"
import NewAuthor from "../pages/NewAuthor/NewAuthor"
import NewCompany from "../pages/NewCompany/NewCompany"
import NewManga from "../pages/NewManga/NewManga"


const indexRouter = createBrowserRouter ([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: '/new-author',
                element: <NewAuthor />
            },
            {
                path: '/new-company',
                element: <NewCompany />
            },
            {
                path: '/new-manga',
                element: <NewManga />
            }
        ]
    }
])

export default indexRouter