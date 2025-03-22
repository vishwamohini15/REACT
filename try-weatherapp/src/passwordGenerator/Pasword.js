import React, { useCallback, useEffect, useState } from 'react'
import './style.css' 

const Pasword = () => {
     const [leangth, setLeangth] = useState(8)
     const [number, setNumber] = useState(false)
     const [charater, setCharater] = useState(false)
     const [password, setPassword] = useState('')

     const passwordgenerator=useCallback(() => {
      let pass=''
      let str= "ABCDefghijklmnopqrstuvwxyz"
      let numbuu="123456789"
      let symbol="!@#$%^&8~"

      if(number) str +=numbuu
      if(number) str +=symbol


      for (let i = 0; i <leangth; i++) {
        let char= Math.floor(Math.random()*str.length+1);

        pass +=str.charAt(char)

      }

     }, [number, leangth, charater, setPassword])


     useEffect(() => {
       passwordgenerator()
     }, [number, leangth, charater,passwordgenerator])
     
  return (
    <div className='mainuu'>
     <div>
          <input type="text" value={leangth}  onChange={(e)=>setLeangth(e.target.value)}/>

          <div className="checkbox">
               <input type='range' defaultChecked={leangth} 
              
               />
               <label >number : {number}</label>
          </div>

          <div className="checkbox">
               <input type='checkbox' defaultChecked={number}
                onChange={()=>{
                    setNumber((prev)=> !prev)
               }}/>
               <label >charater </label>
          </div>

          <div className="checkbox">
               <input type='checkbox' 
               value={charater}
               onChange={()=>{
                    setCharater((prev)=> !prev)
               }}
               />
               <label >symbol</label>
          </div>
     </div>
    </div>
  )
}

export default Pasword
