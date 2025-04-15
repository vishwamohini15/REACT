import React from 'react'
import { Link } from 'react-router-dom'
import ContactCard from './ContactCard'
const ContactList = ({contacts,getContactid}) => {
     // console.log(contacts);
     
     const deleteContactHandler=(sno)=>{
      getContactid(sno)
     }

    //  const contacts=[{
    //   sno:0,
    //   "name":"muskan",
    //   "email":"hello@gmil.com"
    //  }]
     const renderContactslist=contacts.map((contact, sno)=>{
          return(
              <ContactCard contact={contact} key={sno} clickHandler={deleteContactHandler }/>
          )
     })
  return (
    <div className="main" style={{marginTop:"66px", display:'flex', flexDirection:'column'}}>
      <h2 style={{display:'flex', justifyContent:'space-between'}}>
        Contact List
        <Link to="/add">
        <button className='ui button blue right'>Add contact</button>
        
        </Link>
      </h2>
    <div className='ui celled list'> {renderContactslist}  </div>
    </div>
  )
}

export default ContactList
