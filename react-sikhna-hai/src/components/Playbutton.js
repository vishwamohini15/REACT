import React, { useContext, useState, memo} from 'react'
import TheamContext from '../context/Theamcontex'

const Playbutton= memo(function Playbutton ({message, children, onclick, onpaused}){
     const theme=useContext(TheamContext)
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
      <button className={`${theme}`} onClick={handelclick
      }>{children} {playing ?"💹": "🛑"}</button>
    </div>
  )
})

export default Playbutton
