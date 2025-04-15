import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Addccontact = ({addContactHandler}) => {
     const [name, setname] = useState([])
     const [email, setEmail] = useState([])
     const navigate = useNavigate();


   const add=(e)=>{
     e.preventDefault();
     if (name==="" || email==="") {
          alert("please fill all input form")
          return;
     }
    //  console.log(name,email);
     addContactHandler({name,email})
     setname("")
     setEmail("")

     navigate("/");

     
   }


  return (
    <div className='ui main'>
      <h2>Add Contact</h2>
      <form className='ui form' onClick={add}>
          <div className="field">
               <label>Name</label>
               <input type="text" name='name' placeholder='Name' 
               value={name}
               onChange={(e)=>{setname(e.target.value)}}
               
               />
          </div>

          <div className="field">
               <label>Email</label>
               <input type="text" name='name' placeholder='Email'
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                
               />
          </div>
          <div className="ui button blue">Add</div>
      </form>
    </div>
  )
}

export default Addccontact

