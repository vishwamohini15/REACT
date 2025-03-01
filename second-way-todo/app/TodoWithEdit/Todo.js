import React, { useEffect, useState } from 'react'

//get local data
const getlocaldata=()=>{
     const lists=localStorage.getItem("mytodo")

     if (lists) {
          return JSON.parse(lists)
     }else{
          return []
     }
}

const Todo = () => {
     const[inputdata, setinputdata]=useState("")
     const[item, setitem]=useState(getlocaldata())
     const [iseditItem, setIseditItem] = useState()
     const[toggleButton, settoggleButton]=useState(false)

     const additem=()=>{
          if (!inputdata) {
               alert("please fill the input")
          }else if (inputdata && toggleButton) {
               setitem(
                    item.map((cuureelm)=>{
                         if (cuureelm.id===iseditItem) {
                              return {...cuureelm, name: inputdata};
                         }
                         return cuureelm
                    })
               )

               setinputdata("")
               setIseditItem(null)
               settoggleButton(false)
          }else{
               const mynewinputdata={
                    id: new Date().getTime().toString(),
                    name: inputdata,
               }
               setitem([...item, mynewinputdata])
               setinputdata("")
          }
     }

     const edititem=(index)=>{
          const editTodoitem=item.find((currentElm)=>{
               return  currentElm.id === index;
          })
          setinputdata(editTodoitem.name)
          setIseditItem(index)
          settoggleButton(true)
     }

     const deleteitem=(index)=>{
          const updateditem=item.filter((currelem)=>{
               return currelem.id != index;
          })
          setitem(updateditem);
     }

     const removeAll=()=>{
          setitem([]);   
     }

     useEffect(() => {
       localStorage.setItem("mytodo", JSON.stringify(item))
     }, [item])
     
  return (
    <div className=' main-div bg-red-700 flex  items-center gap-8 flex-col h-full'>
      <div className="child-div bg-yellow-400 p-3 mt-10 flex justify-center items-center gap-3 flex-col">
          <figure>
          <figcaption>Add your list here 💎✴</figcaption>
          </figure>
          <div className="additems flex w-90">
               <input type="text" placeholder='✍ Add item'
                className='form-control w-80 p-2'
                 value={inputdata}
                 onChange={(e)=>setinputdata(e.target.value)}/>
                 {toggleButton ? (
               <b className='add-btn p-2 rounded bg-green-700' onClick={additem}>📩</b>
                 ): (
               <b className='add-btn p-2 rounded bg-green-700' onClick={additem}>➕</b>

                 )}
               </div>

               <div className="showitem bg-slate-50 w-90">
                    {item.map((curelm)=>{
                         return(
                              <div className="eachitem flex justify-between gap-40 p-2 bg-slate-400 m-3" key={curelm.id}>
                              <h3 className=''>{curelm.name}</h3>
                              <div className="todo-btn flex justify-between gap-3">
                                   <b className='bg-green-500 p-1 rounded-full' 
                                    onClick={()=>edititem(curelm.id)}>📩</b>
                                   <b className='bg-blue-600 p-1 rounded-full'
                                    onClick={()=> deleteitem(curelm.id)}>❌</b>
                              </div>
                         </div>
                         )
                    })}
                  
               </div>

               <div className="showitem"><button className="btn bg-green-700 p-2 text-white" data-sm-link-text="Remove All" onClick={removeAll}>  <span>Check List</span></button></div>

      </div>
    </div>
  )
}

export default Todo
