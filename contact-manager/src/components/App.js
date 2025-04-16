import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Addccontact from './Addccontact';
import './App.css';
import api from '../api/Contacts'
import ContactList from './ContactList';
import Header from './Header';
import ContactDetail from './ContactDetail';
// import { Route } from 'react-router-dom';

let id;

function App() {
  const [contacts, setContacts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false); 
  
//RetriveContacts
const RetrieveContacts= async ()=>{
  const response= await api.get("/contacts") 
  return response.data;
}


  const addContactHandler =async (contact) => {
  if (contacts.length===0) {
    id=0;
  }else{
     id=Math.floor(Math.random()*contacts.length+1)
     console.log("helo id=",id);
     
  }
  const mytodo={
    id:id,
    name:contact.name,
    email:contact.email
  }
  
    const response=await api.post("/contacts", mytodo)
    console.log(response);
    
    setContacts([...contacts, response.data]);
  };


  const removecontacts=async(id)=>{
    // console.log(contacts);
    console.log("Deleting contact with id:", id); 
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => contact.id !== id);
    setContacts(newContactList);

  }
  
  useEffect(() => {
    // const retriveContacts = localStorage.getItem("hlo");
    // if (retriveContacts) setContacts(JSON.parse(retriveContacts));
    // setIsLoaded(true); // <-- mark as loaded

    const getAllContacts= async ()=>{
      const allContacts =await RetrieveContacts()
      if(allContacts) setContacts(allContacts)
        setIsLoaded(true);
    }
    getAllContacts()
  }, []);
  
  useEffect(() => {
    // if (isLoaded) {
    //   localStorage.setItem("hlo", JSON.stringify(contacts));
    //   // console.log(contacts);
    // }
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

    <Route path='/contact/:id' Component={ContactDetail}/>
  </Routes>
</Router>

    </div>
  );
}

export default App;
