import React, { useEffect, useRef, useState } from 'react'
import useVideoDispatch from '../hooks/VideoDispatch'
// import VideoDispatchContext from '../context/VideoDispatchCntx'

let initialstate={
     time:"1 year ago",
     channel:"vishwamohini",
     verifid:true,
     title:'',
     views:''
}
const Addvideo = ({ editablevideo}) => {
     const [video, setvideo] = useState(initialstate)
     const dispatch=useVideoDispatch()
     const inputRef=useRef(null)
     
     function handelsubmit(e){
          e.preventDefault()
          if (editablevideo) {
               dispatch({type: 'UPDATE', payload:video})

          }else{
               dispatch({type: 'ADD', payload:video})

          }
          setvideo(initialstate)
     }

     const handelchange=(e)=>{
          console.log(e.target.name,e.target.value);
          setvideo({...video,
               [e.target.name]:e.target.value
          })
     }

     useEffect(() => {
          if (editablevideo) {
          setvideo(editablevideo)
               
          }

          inputRef.current.style.color="red"
     }, [editablevideo])
     

  return (
     <form >
          <input ref={inputRef} type="text" name='title' placeholder='title' className='inpuu' onChange={handelchange}  value={video.title}/>
          <input type="text" name='views' placeholder='views' className='inpuu' onChange={handelchange} value={video.views}/>
          <button className='plybtn'  onClick={handelsubmit}>{editablevideo? 'edit' : 'add'}</button>
     </form>
  )
}

export default Addvideo
