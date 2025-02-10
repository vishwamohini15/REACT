import React, { useState } from 'react'
import Menu from './MenuApi'
import Menucard from './Menucard'
import Navbar from './Navbar'

const uniquelist=[...new Set(Menu.map((curelm)=>{
  return curelm.category;
})),'all'
]

const Resturant = () => {
     const [menuData, setmenuData]=useState(Menu)
     const [menulist, setMenulist] = useState(uniquelist)
     console.log(menuData);

     const filteritem=(categoryyy)=>{
      if(categoryyy==='all'){
        setmenuData(Menu)
        return;
      }
      let updatelist=Menu.filter((elm)=>{
        return elm.category=== categoryyy;
      })
      setmenuData(updatelist)
     }
     
  return (
   <>
  <Navbar filteritem={filteritem} menulist={menulist}/>
    <Menucard  menuData={menuData}/>
   </>
  )
}

export default Resturant
