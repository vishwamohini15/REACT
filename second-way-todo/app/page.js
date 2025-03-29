"use client"
import React, { useState } from 'react'
// import Todo from '/./TodoWithEdit/Todo';
import SolanaApp from './hello/Solona';


const page = () => {
/*

  const[title, settitle]=useState("")
  const[desc, setdesc]=useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(title);
    console.log(desc);
// setdesc("")
    // settitle("")
    setmainTask([...mainTask,{title,desc}])
    
    console.log(mainTask);
    
  }

const deleteHandler=(i)=>{
 let copytask=[...mainTask]
 copytask.splice(i,1)
 setmainTask(copytask)
}

let renderTask=<h2 className='text-violet-950  text-center text-2xl'>No Task To Display</h2> 
if (mainTask.length>0) {
  renderTask=mainTask.map((t,i)=>{
    return(
      <li key={i} className='flex items-center justify-between gap-6 mx-11'>
         <div className='flex justify-between gap-2 w-2/3 mb-3'>
      <h4 className='text-xl font-semibold'>{t.title}</h4>
      <h6 className='text-lg'>{t.desc}</h6>
    </div>
    <button 
    onClick={()=>{
      deleteHandler(i)
    }} 
    className='bg-red-900 p-3 border-lime-300 text-white my-2'>Delete</button>
      </li>
    )
  })
}
  return (
    <>
    <h1 className='bg-black text-white py-3 text-center text-5xl'>myTodo List</h1>
   <form className='bg-slate-300' onSubmit={submitHandler}>
    <input type="text" className='text-2xl border-zinc-700 border-2 m-8 px-4 py-2 ' placeholder='Enter Your Task Here' autoFocus  value={title} onChange={(e)=>settitle(e.target.value)}/>

    <input type="text" className='text-2xl border-zinc-700 border-2 m-8 px-4 py-2 ' placeholder='Enter Your Description' autoFocus value={desc} onChange={(e)=>setdesc(e.target.value)}/>

    <button  className='bg-green-500 text-white border-red-400 p-3 text-2xl m-4'>ADD TASK</button>
    </form>
    <hr />
    <div className="p-8 bg-pink-500">
      <div>{renderTask}</div>
    </div>
    </>
  )

*/






return(
  <div className='h-screen max-w-full bg-green-500 p-10'>
  {/* <Todo/> */}
  <SolanaApp/>

  </div>
)
}
export default page;
