import React, { useRef, useState } from 'react'

const Counter = () => {
  console.log("counter wala render");
  
     const [number, setNumber] = useState(0)
     let num=useRef(0);

     function handelnumber(){
          setNumber(number+1)
          num.current++
          console.log(num.current);
          
     }
  return (
    <div>
      <h1>{number} : {num.current}</h1>
      <button onClick={handelnumber}>button</button>
    </div>
  )
}

export default Counter
