import React from 'react'

const WetherChek = ({weatherinfo}) => {
     const{
          pressure,humidity,speed,country,sunset,name
     }=weatherinfo
  return (
    <>
    <div>
<div className="eachpart">
     <p>🌞</p>
     <h2>{sunset}</h2>
     <h3>sunset</h3>
</div>
<div className="eachpart">
     <p>🌞</p>
     <h2>{humidity}</h2>
     <h3>Humidity</h3>
</div>
<div className="eachpart">
     <p>🌞</p>
     <h2>{pressure}</h2>
     <h3>pressure</h3>
</div>
<div className="eachpart">
     <p>🌞</p>
     <h2>{speed}</h2>
     <h3>speed</h3>
</div>
</div>
    </>
  )
}

export default WetherChek
