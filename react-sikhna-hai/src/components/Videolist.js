import React, { useCallback, useEffect, useMemo } from 'react'
import Video from './Video'
import Playbutton from './Playbutton'
import useVideo from '../hooks/Videos'
import axios from 'axios'
import useVideoDispatch from '../hooks/VideoDispatch'

const Videolist = ({editvideo}) => {
const url='https://dummyjson.com/products'

// const url="https://my.api.mockaroo.com/video.json?key=ea9e44d0"


   const videos=useVideo()
const dispatch=useVideoDispatch()
   // async function handelclick(){
   // const res= await axios.get(url)
   //    console.log("kl", res.data.products);
   //    dispatch({type:'LOAD', payload:res.data.products})
   // }

   useEffect(() => {
      async function getvideo(){
         const res= await axios.get(url)
            console.log("kl", res.data.products);
            dispatch({type:'LOAD', payload:res.data.products})
         }
    getvideo()
   }, [dispatch])
   
   const play=useCallback(()=>console.log("playing-hua"),[])
   const paused=useCallback(()=>console.log("paused-hua"),[])
const memobutton=useMemo(()=>(<Playbutton
onclick={play}
onpaused={paused}>
playyyy
</Playbutton>),[play,paused])
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
           
         {memobutton} 
          </Video>
        )
     })}
     
   </div>
   {/* <button  onClick={handelclick}>get videos</button> */}
   </>
  )
}

export default Videolist
