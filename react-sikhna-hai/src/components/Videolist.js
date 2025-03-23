import React, { useEffect, useState } from 'react'
import Video from './Video'
import Playbutton from './Playbutton'
// import useVideo from '../hooks/Videos'
import axios from 'axios'

const Videolist = ({editvideo}) => {
const url='https://dummyjson.com/products'

// const url="https://my.api.mockaroo.com/video.json?key=ea9e44d0"


   // const videos=useVideo()

const [videos, setvideos]=useState([])
   async function handelclick(){
   const res= await axios.get(url)
      console.log("kl", res.data.products);
      setvideos(res.data.products)
   }

   useEffect(() => {
    handelclick()
   }, [])
   
  return (
   <>
     <div className='container' >

     {videos.map((video)=>{
        return(
         <Video title={video.title}
         id={video.id}
         views={video.views}
          time={video.time}
          channel={video.channel}
          verifydd={video.verifid} key={video.id}
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
   <button  onClick={handelclick}>get videos</button>
   </>
  )
}

export default Videolist
