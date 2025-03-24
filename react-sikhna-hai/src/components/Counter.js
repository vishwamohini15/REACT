import React, { useMemo, useRef, useState, useCallback} from 'react'


const Counter = () => {
  console.log("counter wala render");
  
     const [number, setNumber] = useState(10)
     let num=useRef(0);

     function handelnumber(){
          setNumber(number+1)
          num.current++
          console.log(num.current);
          
     }

     const fibfix=useCallback(function fib(n){
      if (n===1 || n===2) {
            return 1
      }
      return fib(n-1)+fib(n-2)
     },[])
    

  const febMemonized= useMemo(()=>fibfix(number),[number,fibfix])

  return (
    <div>
      <h1>{number} || 
      {febMemonized}

      </h1>
      <button onClick={handelnumber}>button</button>
    </div>
  )
}

export default Counter
