import React, { useState } from 'react'
import './Try.css'

const TUMHUM = () => {
     const [inputvlu, setInputvlu] = useState("")
     const [addData, setAddData] = useState([])

     const updatetodo=()=>{
          if (!inputvlu) {
               alert("please enter your item")
          }else{
               let dululu={
                    id:new Date().getTime().toString(),
                    name:inputvlu
               }
               setAddData([...addData,dululu])
          }
          setInputvlu("")
     }

     const deletehojaa=(index)=>{
          const updateditem=addData.filter((currelem)=>{
               return currelem.id !== index;
          })
          setAddData(updateditem);
     }

     const remove=()=>{
          setAddData([])
     }
     
  return (
    <div className='todomain'>
      <div className='inpuu'>
          <input type="text" placeholder='enter your task'
          value={inputvlu}
          onChange={(e)=>setInputvlu(e.target.value)}
          />
          <div className='plus' onClick={updatetodo}>➕</div>
      </div>
      <div className="addtaskSection">
        {addData.map((item)=>{
          return(
               <div className='yoyo' key={item.id}>
                      <h3>{item.name}</h3>
          <div className="edit-del">
               <h2>🌞</h2>
               <h2 onClick={()=>deletehojaa(item.id)}>🛑</h2>
          </div>
               </div>
          )
        })}
      </div>
      <div className='remo' onClick={remove}>Remove-All</div>
    </div>
  )
}

export default TUMHUM
