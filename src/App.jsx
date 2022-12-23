import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import WeatherApi from './components/WeatherApi'

function App() {
  const [cities, setCities] = useState([]);
  const [curCity, setCurCity] = useState('baku');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    if(curCity == "") {
      setCurCity("baku")
    }
    setIsLoading(true)
    fetch(`https://api.weatherapi.com/v1/current.json?key=de4fcc1d06a64857be7101727222212&q=${curCity}&aqi=no`)
    .then(res=>res.json())
    .then(res => {
      setCities([res])
      setIsLoading(false)
    })
  }, [curCity])
  return (
    <div className="App">
      <Header setCurCity={setCurCity} />
      <WeatherApi cities={cities} isLoading={isLoading}/>
    </div>
  )
}

export default App
