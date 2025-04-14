import { useEffect, useState } from 'react';
import Addccontact from './Addccontact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';
// import { uuid } from 'uuidv4';

function App() {
  const idoo=1;
  const [contacts, setContacts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); 
  
  const addContactHandler = (contact) => {
    console.log(contact);
    
    setContacts([...contacts, {id:idoo+1 , ...contact}]);
  };

  const removecontacts=(id)=>{
    const newcontctlist=contacts.filter((contact)=>{
      return contact.id !==id;
    })
    setContacts(newcontctlist)
  }
  
  useEffect(() => {
    const retriveContacts = localStorage.getItem("hlo");
    if (retriveContacts) setContacts(JSON.parse(retriveContacts));
    setIsLoaded(true); // <-- mark as loaded
  }, []);
  
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("hlo", JSON.stringify(contacts));
      console.log(contacts);
    }
  }, [contacts, isLoaded]);
  
  
  // localStorage.clear()
  return (
    <div className='ui container'>
     <Header/>
     <Addccontact  addContactHandler={addContactHandler}/>
     <ContactList  contacts={contacts} getContactid={removecontacts}/>
    </div>
  );
}

export default App;
