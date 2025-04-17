import React, { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";

const EditContact = ({ UpdateContactHandler }) => {
  const location = useLocation();
  const { id, name: initialName, email: initialEmail } = location.state.contact;

  const [name, setname] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const navigate = useNavigate();

  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("please fill all input form");
      return;
    }

    UpdateContactHandler({ id, name, email }); // id is now passed ✅
    console.log("Updating contact:", { id, name, email });

    setname("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className='ui main'>
      <h2>Edit Contact</h2>
      <form className='ui form' onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="ui button blue" type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
