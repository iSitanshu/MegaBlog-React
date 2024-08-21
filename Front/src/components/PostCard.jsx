import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from './index'

function PostCard({$id, title, featuredImage}) {
  return (
    <link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <img src={appwriteService.getFilePreview(featuredImage)} 
          className='rounded-xl' alt={title} />
        </div>
        <h2 className='text-xl font-bold'
            >{title}</h2>
      </div>
    </link>
  )
}

export default PostCard