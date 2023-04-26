import { createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout/Layout"
import Home from "../pages/Home/Home"
import NewAuthor from "../pages/NewAuthor/NewAuthor"
import NewCompany from "../pages/NewCompany/NewCompany"


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
            }
        ]
    }
])

export default indexRouter