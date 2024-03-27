import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App/App.jsx";
import Home from "../pages/Home/Home.jsx";
import File from "../pages/File/File.jsx";
import AboutUs from "../pages/AboutUs/AboutUs.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/file/:digiId',
                element: <File/>
            },
            {
                path: '/aboutus',
                element: <AboutUs/>
            }
        ]
    } 
])

export default router;

