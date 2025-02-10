import { useContext, useEffect, useState } from 'react';
import './App.css';
import Mohini from './component/Mohini';
import Admindas from './Dashboard/Admindas';
import EpmloyeDas from './Dashboard/EpmloyeDas';
import { AuthContex } from './contex/Authprovid';
// import { getAdminlocalstorege, getlocalstorege, setAdminLocalStorage, setLocalStorage } from './utlis/loaclstorage';

function App() {
  // useEffect(() => {
  //     setLocalStorage()
  //     setAdminLocalStorage()
  //     getlocalstorege()
  //     getAdminlocalstorege()
  //   },);

  const[user, setuser]=useState(null)

  const handellogin=(email,password)=>{
    // console.log("helo pass");
    if (email==="admin@gmail" && password ==="123") {
      console.log("this is admin");
      setuser('admin')

      
    }else if (email==="user@gmail" && password ==="123") {
      console.log("this is user");
      setuser('employess')
    }else{
      alert("invalid credintial")
    }
    
  }

  const data=useContext(AuthContex)
  console.log(data);
  
  return (
   <>
   {!user ? <Mohini  handellogin={handellogin}/> : ''}
    {user == 'admin' ? <Admindas/> : <EpmloyeDas/>}
    {/* {user =='admin' ? <AdminDashboard/> : <EmpolyeeDashboard/>} */}

   </>
  );
}


export default App;
