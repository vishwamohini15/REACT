import React from 'react'

const Resume = ({name,experience,skills}) => {

  // ................ this all is from APP.JS 
//   let resumee={
// name:"vishwamohini",
//  experience:"MERN Devloper With DSA",
//   skills:"MERN,DSA,React Devloper"
//   }

// import Resume from './TryMySelf/Resume';
      // {/* <Resume  {...resumee} /> */}
// .............

  return (
    <div>
     <img src="https://picsum.photos/id/365/200/300" alt="" />
      <h1>Name:{name}</h1>
      <h2> Experience :{experience}</h2>
      <h3>Skills:{skills}</h3>

    </div>
  )
}

export default Resume
