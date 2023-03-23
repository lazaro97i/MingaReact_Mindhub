import { createBrowserRouter } from "react-router-dom"
import Layout from "../layouts/Layout/Layout"
import Home from "./Home/Home"


const indexRouter = createBrowserRouter ([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home/>,
            }
        ]
    }
])

export default indexRouter