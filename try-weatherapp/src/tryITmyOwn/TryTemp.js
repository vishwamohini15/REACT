import React, { useEffect, useState } from 'react'
import WetherChek from './WetherChek'

const TryTemp = () => {
     const [searchvalue, setSearchvalue] = useState("delhi")
     const [weatherinfo, setWeatherinfo] = useState({})

     const searchWeather=async()=>{
          try {
               let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchvalue}&units=metric&appid=c0854b54da1a4a7e5037336e92472172`
               let res=await fetch(url)
               let data=await res.json();
               console.log(data);
               let{pressure,humidity}=data.main
               let{speed}=data.wind
               let {country,sunset}=data.sys
               let {name}=data

               const destructureWay={
                    pressure,humidity,speed,country,sunset,name
               }
               setWeatherinfo(destructureWay)
          } catch (error) {
               console.log(error);
               
          }
     }

     useEffect(() => {
      searchWeather()
     }, [])
     
  return (
    <div>
   <div className="firstdiv">
     <input type="search" value={searchvalue}
     onChange={(e)=>setSearchvalue(e.target.value)}/>
     <button onClick={searchWeather}>search</button>
     <h2>3/5/25</h2>
   </div>
  <WetherChek weatherinfo={weatherinfo}/>
    </div>
  )
}

export default TryTemp
