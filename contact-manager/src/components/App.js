import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Addccontact from './Addccontact';
import './App.css';
import ContactList from './ContactList';
import Header from './Header';
// import { Route } from 'react-router-dom';

let sno;

function App() {
  const [contacts, setContacts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); 
  
  const addContactHandler = (contact) => {
  if (contacts.length===0) {
    sno=0;
  }else{
     sno=contacts.length+1;
  }
  const mytodo={
    sno:sno,
    name:contact.name,
    email:contact.email
  }
  
    setContacts([...contacts, mytodo]);
  };


  const removecontacts=(sno)=>{
    console.log(contacts);
    
    const newContactList = contacts.filter((contact) => contact.sno !== sno);
    setContacts(newContactList);

  }
  
  useEffect(() => {
    const retriveContacts = localStorage.getItem("hlo");
    if (retriveContacts) setContacts(JSON.parse(retriveContacts));
    setIsLoaded(true); // <-- mark as loaded
  }, []);
  
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("hlo", JSON.stringify(contacts));
      // console.log(contacts);
    }
  }, [contacts, isLoaded]);
  
  
  return (
    <div className='ui container'>
      <Router>
  <Header />

  <Routes>
    <Route path="/" element={
      <ContactList contacts={contacts} getContactid={removecontacts} />
    } />
    
    <Route path="/add" element={
      <Addccontact addContactHandler={addContactHandler} />
    } />
  </Routes>
</Router>

    </div>
  );
}

export default App;
