import { Link } from 'react-router-dom'
import "./Navbar.css"

import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to={`/blog_axios_front_react_js`}>Blog</Link>
        </h2>
        <ul>
            <li>
                <Link to={`/blog_axios_front_react_js`}>Home</Link>
            </li>
            <li>
                <Link to={`/blog_axios_front_react_js/admin`} >Gerenciar</Link>
            </li>
            <li>
                <Link to={`/blog_axios_front_react_js/new`} className='new-btn'>Novo Post</Link>
            </li>
           
        </ul>
    </nav>
    
  )
}

export default Navbar