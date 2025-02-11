import React from 'react'

const Card = ({foodata}) => {
  return (
   <>
     {foodata.map((fod)=>{
          return(
               <>
                 <div className="cardContainer">
     <div className="cardSection">
          <div >
          <h1> <span>1</span>{fod.category}</h1>
          <h3>{fod.name}</h3>
          <p>{fod.description}</p>
          </div>
          <div className='imgSection'>
               <img src={fod.image} alt="img" />
          </div>

     </div>
    </div>
           </>
          )
     })}
   </>
  )
}

export default Card
