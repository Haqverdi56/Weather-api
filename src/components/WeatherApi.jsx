import React from 'react'
import "./weather.css"
import { MagnifyingGlass } from "react-loader-spinner";


function WeatherApi({cities, isLoading}) {
  
  return (<>
    <div className='about-div'>
      {
        isLoading ? 
        <MagnifyingGlass visible={true}
        height="200px"
        width="100%"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor = '#c0efff'
        color = '#4158D0'/>
        :
        cities && cities.map((city,i)=> (
          <div key={i} className="about-weather">
            <div>
              <p>{city?.location?.country}</p>
            </div>

            <div>
              <img src={city?.current?.condition.icon} alt="" />
              <p>{city?.current?.condition.text}</p>
              <div>{city?.current?.temp_c}</div>
              <div>{city?.current?.feelslike_c}</div>
            </div>
            
            <div className=''>
              <span>{city?.current?.humidity}</span>
              <span>{city?.current?.wind_mph}</span>
              <span>{city?.current?.pressure_mb}</span>
              <span>{city?.current?.vis_km}</span>
            </div>
          </div>
        ))
      }
    </div>
  </>)
}

export default WeatherApi
