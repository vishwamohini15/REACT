import React from 'react'
import ContactCard from './ContactCard'

const ContactList = ({contacts,getContactid}) => {
     // console.log(contacts);
     
     const deleteContactHandler=(id)=>{
      getContactid(id)
     }
     const renderContactslist=contacts.map((contact, id)=>{
          return(
              <ContactCard contact={contact} key={id} clickHandler={deleteContactHandler}/>
          )
     })
  return (
    <div className='ui celled list'> {renderContactslist}  </div>
  )
}

export default ContactList
