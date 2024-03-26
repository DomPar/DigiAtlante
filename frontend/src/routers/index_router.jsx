import { createBrowserRouter, redirect } from "react-router-dom";
import App from "../pages/App/App.jsx";
import Home from "../pages/Home/Home.jsx";
import File from "../pages/File/File.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/file',
                element: <File/>
            }
        ]

    } 
])

export default router;

