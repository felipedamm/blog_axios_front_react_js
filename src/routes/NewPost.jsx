import React, { useState } from 'react'
import blogFetch from '../axios/config'
import "./NewPost.css"

import { useNavigate } from 'react-router-dom'

const NewPost = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) => {
    e.preventDefault()

      const post = {title, body, userID: 1}

      await blogFetch.post("/posts", {
        body: post
      })

      navigate("/blog_axios_front_react_js")
  }

  return (
    <div className='new-post'>
      <h2>Inserir um novo Post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input type="text" name='title' id='title' placeholder='Digite o título' onChange={(e) => setTitle(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea name="body" id="body" placeholder='Digite o conteúdo' onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <input type="submit" value="Criar post" className='btn'/>
      </form>
      
    </div>
  )
}

export default NewPost