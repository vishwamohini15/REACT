import React from 'react'
import Video from './Video'
import Playbutton from './Playbutton'

const Videolist = ({videos, deletevideo,editvideo}) => {
  return (
     <div className='container' >

     {videos.map((video)=>{
        return(
         <Video title={video.title}
         id={video.id}
         views={video.views}
          time={video.time}
          channel={video.channel}
          verifydd={video.verifid} key={video.id}
          deletevideo={deletevideo}
          editvideo={editvideo}
          >
           
           <Playbutton
              onclick={()=>console.log("playing-hua", video.title)}
             onpaused={()=>console.log("paused-hua", video.title)}
             >{video.title}</Playbutton>
          </Video>
        )
     })}
     
   </div>
  )
}

export default Videolist
