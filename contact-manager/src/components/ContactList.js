import React from 'react'
import ContactCard from './ContactCard'

const ContactList = ({contacts,getContactid}) => {
     // console.log(contacts);
     
    //  const deleteContactHandler=(id)=>{
    //   getContactid(id)
    //  }
     const renderContactslist=contacts.map((contact, sno)=>{
          return(
              <ContactCard contact={contact} key={sno} clickHandler={getContactid}/>
          )
     })
  return (
    <div className='ui celled list'> {renderContactslist}  </div>
  )
}

export default ContactList
