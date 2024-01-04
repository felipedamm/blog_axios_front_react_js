import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"

//páginas

import Home from './routes/Home.jsx'
import NewPost from './routes/NewPost.jsx'
import Post from './routes/Post.jsx'
import Admin from './routes/Admin.jsx'
import EditPost from './routes/EditPost.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/blog_axios_front_react_js",
        element: <Home />
      },
      {
        path: "/blog_axios_front_react_js/new",
        element: <NewPost />
      },
      {
        path: "/blog_axios_front_react_js/posts/:id",
        element: <Post />
        
      },
      {
        path: "/blog_axios_front_react_js/Admin",
        element: <Admin />
      },
      {
        path: "/blog_axios_front_react_js/posts/edit/:id",
        element: <EditPost />
      }
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
