import React, { useContext } from 'react'
import './Video.css'
import VideoDispatchContext from '../context/VideoDispatchCntx'

const Video = ({title,channel="muskan",views,time,verifydd,id, children,editvideo}) => {
  // let chanelJSX
  // if (verifyd) {
  // chanelJSX=<div className='channel'>{channel}✔💚❤❌</div>
  // }else{
  // chanelJSX=<div className='channel'>{channel}❤❌</div>
    
  // }

  const dispatch=useContext(VideoDispatchContext)
  return (
     <div className="card">
      <button  className='close' onClick={()=>  dispatch({type: 'DELETE', payload:id})}>X</button>
      <button  className='edit' onClick={()=>editvideo(id)}>Edit</button>

     <div >
     <div>
       <img
      src={`https://picsum.photos/id/${id}/200/300`}
      alt="Katherine Johnson"/> 
    </div>

    <div className='title'>{title}</div>
    <div className='channel'>{channel} {verifydd && "✔💚"}</div>
    <div className='views'>{views}views <span>.</span> {time} </div>

     </div>

<div>
  {children}
</div>
    </div>
  )
}

export default Video
