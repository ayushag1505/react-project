import React from 'react'
import service from '../appwrite/majorConfig'
import { Link } from 'react-router-dom'



function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full rounded-xl p-4 bg-gray-100'>
            <div className='w-full mb-4 justify-center'>
                <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard