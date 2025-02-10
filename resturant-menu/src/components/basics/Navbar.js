import React from 'react'

const Navbar = ({filteritem, menulist}) => {
  return (
    <>
       <nav>
    <div className="btn-group">
     {menulist.map((curelm)=>{
          return(
      <button className="btn-item"
       onClick={()=>filteritem(curelm)}>
          {curelm}</button>

          )
     })}

    </div>
   </nav>
    </>
  )
}

export default Navbar
