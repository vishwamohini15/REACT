import React, { useState } from 'react'

const Counter = () => {
     const [number, setNumber] = useState(0)

     function handelnumber(){
          setNumber(number+1)
          console.log(number);
          
     }
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handelnumber}>button</button>
    </div>
  )
}

export default Counter
