import React from 'react'
import { formatAgo } from '../util/data'
import { useNavigate } from 'react-router-dom'
export default function VideoCard({video}) {
  const navigate = useNavigate()
  const {title,thumbnails,channelTitle,publishedAt}= video.snippet
  return (
    <li onClick={()=>{navigate(`videos/watch/${video.id}`, {state:{video}})}}>
      <img className='w-full' src={thumbnails.medium.url}></img>
      <div>
        <p className='font-semibold my-2 line-clamp-2'>{title}</p>
        <p className='text-sm opacity-80'>{channelTitle}</p>
        <p className='text-sm opacity-80'>{formatAgo(publishedAt,'ko')}</p>
      </div>
    </li>
  )
}
