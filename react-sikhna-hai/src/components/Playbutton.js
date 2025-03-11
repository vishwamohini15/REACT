import React, { useState } from 'react'

const Playbutton = ({message, children, onclick, onpaused}) => {
const [playing, setPlaying] = useState(false)
     const handelclick=(e)=>{
          e.stopPropagation()          
          // console.log(message)
          if(playing){
               onpaused()
          }
               else{
                     onclick()
               }
          setPlaying(!playing)
     }
  return (
    <div>
      <button className='plybtn' onClick={handelclick
      }>{children} {playing ?"💹": "🛑"}</button>
    </div>
  )
}

export default Playbutton
