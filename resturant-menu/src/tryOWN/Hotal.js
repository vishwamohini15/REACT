import React, { useState } from 'react'
import Food from './FoodApi'
import Card from './Card'

const Hotal = () => {
     const[foodata, setfoodata]=useState(Food)

     const filteritem=(categore)=>{
          let updateitem=Food.filter((cate)=>{
             return  cate.category===categore
          })
          setfoodata(updateitem)
     }
  return (
     <>
    <div className='navi'>
     <button className="btn" onClick={()=>filteritem('breakfast')}>Breakfast</button>
     <button className="btn" onClick={()=>filteritem('lunch')}>Lunch</button>
     <button className="btn" onClick={()=>filteritem('evening')}>Evening</button>
     <button className="btn" onClick={()=>filteritem('dinner')}>Dinner</button>
     <button className="btn" onClick={()=>setfoodata(Food)}>All</button>
    </div>
   <Card foodata={foodata}/>
   </>
  )
}

export default Hotal
