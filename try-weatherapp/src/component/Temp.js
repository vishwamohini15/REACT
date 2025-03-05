import { useEffect, useState } from "react"
import React from 'react'
import Weathercard from "./Weathercard"

const Temp = () => {
     const [searchvalue, setSearchvalue] = useState("delhi")
     const [tempinfo, setTempinfo] = useState({})

     const getweatherinfo=async()=>{
          try {
               let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=c0854b54da1a4a7e5037336e92472172`;
               let res=await fetch(url)
               let data=await res.json();
               console.log(data);
               const {temp,humidity,pressure}=data.main
               const {main:weathermood, icon}=data.weather[0]
               const{name}=data;
               const {speed}=data.wind
               const{country, sunset}=data.sys
               console.log(temp);

               const mynewWeatherinfo={
                    temp,humidity,pressure,
                    weathermood, icon,name,speed,country,sunset
               }
               setTempinfo(mynewWeatherinfo)
          } catch (error) {
               console.log(error);
               
          }
     }

     useEffect(() => {
       getweatherinfo();
     }, [])
     
  return (
     <>
    
    <div className='wrap'>
      <div className="search">
          <input type="search" 
          autoFocus
          id='search'
          className='searchTerm' 
          value={searchvalue}
          onChange={(e)=>setSearchvalue(e.target.value)}/>


          <button className='searchbutton' type='button'  onClick={getweatherinfo}>Search</button>
      </div>
    </div>

 <Weathercard tempinfo={tempinfo}/>
    </>
  )
}

export default Temp
