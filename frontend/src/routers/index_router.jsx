import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App/App.jsx";
import File from "../pages/File/File.jsx";
import AboutUs from "../pages/AboutUs/AboutUs.jsx";
import Digidex from "../pages/Digidex/Digidex.jsx";
import Create from "../pages/Create/Create.jsx";
import Login from "../pages/Login/Login.jsx";
import Relate from "../pages/Relate/Relate.jsx";
import Welcome from "../pages/Welcome/Welcome.jsx";
import Api from "../pages/Api/Api.jsx";
import ApiGetAll from "../pages/Api/ApiGetAll.jsx";
import ApiGetOne from "../pages/Api/ApiGetOne.jsx";
import ApiGetAllByLevel from "../pages/Api/ApiGetAllByLevel.jsx";
import DigidexTest from "../pages/DigidexTest/DigidexTest.jsx";
import ApiGetAllByAttribute from "../pages/Api/ApiGetAllByAttribute.jsx";
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
                element: <DigidexTest/>
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
            {
                path: '/api',
                element: <Api/>
            },
            {
                path: '/testDigidex',
                element: <DigidexTest/>
            },
        ]
    },
    {
        path: '/api/digimon',
        element: <ApiGetAll/>
    },
    {
        path: '/api/digimon/:digiId',
        element: <ApiGetOne/>
    }, 
    {
        path: '/api/digimon/level/:level',
        element: <ApiGetAllByLevel/>
    }, 
    {
        path: '/api/digimon/attribute/:attribute',
        element: <ApiGetAllByAttribute/>
    }, 
])

export default router;

