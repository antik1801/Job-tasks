import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from '../Layout/Main';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
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