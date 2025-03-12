import React, { useState } from 'react'

let initialstate={
     time:"1 year ago",
     channel:"vishwamohini",
     verifid:true,
     title:'',
     views:''
}
const Addvideo = ({addvideo}) => {
     const [video, setvideo] = useState(initialstate)

     function handelsubmit(e){
          e.preventDefault()
          addvideo(video)
          setvideo(initialstate)
     }

     const handelchange=(e)=>{
          console.log(e.target.name,e.target.value);
          setvideo({...video,
               [e.target.name]:e.target.value
          })
     }
  return (
     <form >
          <input type="text" name='title' placeholder='title' className='inpuu' onChange={handelchange}  value={video.title}/>
          <input type="text" name='views' placeholder='views' className='inpuu' onChange={handelchange} value={video.views}/>
          <button className='plybtn'  onClick={handelsubmit}>ADDvideo</button>
     </form>
  )
}

export default Addvideo
