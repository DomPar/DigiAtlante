import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from 'react-router-dom'
import router from './routers/index_router'
import { AuthProvider } from './contexts/Authcontext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
