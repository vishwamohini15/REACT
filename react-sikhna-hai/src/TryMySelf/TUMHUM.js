import React, { useState } from 'react'

const TUMHUM = () => {
     const [task, setTask] = useState([])

     const handelsumbit=(e)=>{
          setTask(task)
     }
  return (
    <div>
     <div>
     <input type="text" placeholder='Enter your task' 
     value={task}
     onChange={(e)=>{
          setTask(e.target.value)
          console.log(setTask);
          
     }}
     />
      <button onClick={handelsumbit}>submit</button>
     </div>
      <div>
          <h3>{task}</h3>
      </div>
    </div>
  )
}

export default TUMHUM
