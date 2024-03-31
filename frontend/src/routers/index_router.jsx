import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App/App.jsx";
import File from "../pages/File/File.jsx";
import AboutUs from "../pages/AboutUs/AboutUs.jsx";
import Digidex from "../pages/Digidex/Digidex.jsx";
import Create from "../pages/Create/Create.jsx";
import Login from "../pages/Login/Login.jsx";
import Relate from "../pages/Relate/Relate.jsx";
import Welcome from "../pages/Welcome/Welcome.jsx";
const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Welcome/>
            },
            {
                path: '/file/:digiId',
                element: <File/>
            },
            {
                path: '/aboutus',
                element: <AboutUs/>
            },
            {
                path: '/digidex',
                element: <Digidex/>
            },
            {
                path: '/create',
                element: <Create/>
            },
            {
                path: '/relate',
                element: <Relate/>
            },
            {
                path: '/login',
                element: <Login/>
            },
          
        ]
    } 
])

export default router;

