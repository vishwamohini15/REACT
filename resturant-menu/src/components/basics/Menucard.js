import React from 'react'
import './style.css'

const Menucard = ({menuData}) => {
  return (
   <>
   <section className='mainCard'>
   {menuData.map((currelem)=>{
     return(
          <>
          <div className="card-container" key={currelem.id}>
          <div className="card">
               <div className="card-body">
                    <span className='card-number'>1</span>
                    <span className='card-author' style={{color:'black'}}>{currelem.category}</span>
                    <h2 className='card-title'>{currelem.name}</h2>
                    <span className='card-description'>{currelem.description}</span>
                    <div className="card-read">Read</div>
               </div>
               <img src={currelem.image} alt="imgtr" />
               <span className='card-tag'>Order Now</span>
          </div>
     </div>
          </>
     )
   })}
    </section>
   </>
  )
}

export default Menucard
