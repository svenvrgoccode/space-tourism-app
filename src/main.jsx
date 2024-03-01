import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/style.css'
import{
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";


import Home from "./Home.jsx"
import Destination from "./Destination.jsx"

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
                <Route index element={<Home/>} />
                <Route path="/destination" element={<Destination/>} />

        </>
    )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)


