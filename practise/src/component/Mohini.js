import React, { useState } from 'react'

const Mohini = () => {
  const[email, setemail]=useState("")
  const[password, setpassword]=useState("")

  const submithandler=(e)=>{
    e.preventDefault()
    console.log("hello", email);
    console.log("hello", password);

    
  }
  return (
    <>
    <form onClick={submithandler}>
      <input type="email" placeholder='enter your email' 
      value={email}
      onChange={(e)=>setemail(e.target.value)}
      />
      <input type="password" placeholder='enter your password'
      value={password}
      onChange={(e)=>setpassword(e.target.value)}
      />
      <input type="submit" />

    </form>
    </>
  )
}

export default Mohini
