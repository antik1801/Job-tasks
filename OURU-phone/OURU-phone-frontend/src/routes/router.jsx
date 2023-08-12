import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>This is a browser router</h1>,
        errorElement: <span>Error</span>,
        children:[
          {
            path: "/",
            element: <span>Layout....</span>
          }
        ]
    },
    {
      path:"/login",
      element: <p>Login</p>,
    },
    {
      path:"/signUp",
      element: <p>SignUP</p>
    }
])

export default router