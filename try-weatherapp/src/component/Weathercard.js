import React from 'react'

const Weathercard = ({tempinfo}) => { 
     const{
          temp,humidity,pressure,
          weathermood, icon,name,speed,country,sunset
     }=tempinfo

     let sec=sunset;
     let date=new Date(sec * 1000)
     let timestr=`${date.getHours()} : ${date.getMinutes()}`
  return (
   <>
      <div className="widget">
     <div className="weathericon">
          <img src="🔆" alt="" />
     </div>

     <div className="weatherinfo">
          <div className="temperature">
               <span>{temp}&deg;</span>
          </div>
          <div className="description">
               <div className="weathercondation">{weathermood}</div>
               <div className="place">{name}, {country}</div>
          </div>
     </div>
     <div className="date">{new Date().toLocaleString()}</div>

     <div className="extre-temp">
          <div className="temp-info-minmax">
               <div className="twosidedsection">
                    <p>
                         <span>🌞</span>
                    </p>
                    <div className="extrainfo-leftside">
                         {timestr} PM <br />
                         Sunset
                    </div>
               </div>

               <div className="twosidedsection">
                    <p>
                         <span>⛱</span>
                    </p>
                    <div className="extrainfo-leftside">
                         {humidity} PM <br />
                         Humidity
                    </div>
               </div>
          </div>

          <div className="weather-extra-info">
          <div className="twosidedsection">
                    <p>
                         <span>⛱</span>
                    </p>
                    <div className="extrainfo-leftside">
                         {pressure} PM <br />
                         Preassure
                    </div>
               </div>

               <div className="twosidedsection">
                    <p>
                         <span>⛱</span>
                    </p>
                    <div className="extrainfo-leftside">
                         {speed} <br />
                         speed
                    </div>
               </div>
          </div>
     </div>
    </div>
   </>
  )
}

export default Weathercard
