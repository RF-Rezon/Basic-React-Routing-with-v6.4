import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'
import About from './components/About'
import Books from './components/Books'
import Home from './components/Home'
import './index.css'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "about",
            element: <About/>
        },
        {
            path: "books",
            element: <Books />,
            loader: ()=> fetch('https://api.itbook.store/1.0/new')  
        },
    ]
    },
    {
        path: '/about',
        element: <p>About Page</p>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
