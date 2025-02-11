import React from 'react'

const Navbar = ({filteritem}) => {
  return (
     <div>
     <button className="btn" onClick={()=>filteritem('breakfast')}>Breakfast</button>
     <button className="btn" onClick={()=>filteritem('lunch')}>Lunch</button>
     <button className="btn" onClick={()=>filteritem('evening')}>Evening</button>
     <button className="btn" onClick={()=>filteritem('dinner')}>Dinner</button>
     {/* <button className="btn" onClick={()=>setfoodata(Food)}>All</button> */}
    </div>
  )
}

export default Navbar
