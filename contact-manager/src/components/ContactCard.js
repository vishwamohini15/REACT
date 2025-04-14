import React from 'react'
import user from "../images/user.png"

const ContactCard = ({contact,clickHandler}) => {
     const {id,name, email}=contact
  return (
     <div className="item ">
          <img className="ui avatar image" src={user} alt='user'/>
     <div className="content">
          <div className="header">{name}</div>
          <div>{email}</div>
     </div>
     <div  style={{display:'flex', justifyContent:'flex-end', alignItems:'center', marginTop:'-9px'}}>
     <i className='trash alternate outline icon' style={{color:'red', fontSize:'22px'}}
     onClick={()=>clickHandler(id)}
     ></i>
     </div>
</div>
  )
}

export default ContactCard
