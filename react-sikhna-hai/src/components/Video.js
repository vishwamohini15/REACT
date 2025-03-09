import React from 'react'
import './Video.css'

const Video = ({title,channel="muskan",views,time,verifydd,id}) => {
  // let chanelJSX
  // if (verifyd) {
  // chanelJSX=<div className='channel'>{channel}✔💚❤❌</div>
  // }else{
  // chanelJSX=<div className='channel'>{channel}❤❌</div>
    
  // }

  return (
     <>
     <div className="containermj">
     <div>
       <img
      src={`https://picsum.photos/id/${id}/200/300`}
      alt="Katherine Johnson"/> 
    </div>

    <div className='title'>{title}</div>
    <div className='channel'>{channel} {verifydd && "✔💚"}</div>
    <div className='views'>{views}views <span>.</span> {time} </div>

     </div>

    </>
  )
}

export default Video
