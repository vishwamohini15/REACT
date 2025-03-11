import React, { useState } from 'react'

const Addvideo = ({addVideos}) => {
     const [video, setvideo] = useState({
               views:"10k",
                 channel:"vishwamohini",
                 verifydd:true
     })
     function handelSubmit(e){
          // e.prevantdDefault()
          e.preventDefault()
          addVideos(video)
          console.log(video);
          
     }

     function handelChange(e){
          // console.log(e.target.value,e.target.name);
setvideo({...video,
     [e.target.name]:e.target.value

})
// console.log(video);

     }
  return (
    <form >
     <input className='inpuu' name='title' onChange={handelChange} type="text" placeholder='Title'/> 
     <br />{video.title}
     <input  className='inpuu' name='views'  onChange={handelChange}  type="text" placeholder='Views'/>
      <br />
     <button  className='plybtn' 
     onClick={handelSubmit}
     // onClick={()=>{
//   setVideos( [...videos,{
//     id:videos.length+1,
//     title:"this is DEMO-js",
//      views:"10k",
//       time:"4 year ago",
//        channel:"vishwamohini"
//   },])
// }}

>
add</button>
    </form>
  )
}

export default Addvideo
