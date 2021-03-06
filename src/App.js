import React, { useEffect , useState, useContext} from 'react';
import { usePosition } from 'use-position';
import { WeatherList } from './component/WeatherList/WeatherList';

export const WeatherContext = React.createContext();

export const App = () => {

  const LOCAL_STORAGE_KEY = 'lipa.weather';
  const apiKey = "2cb7c01dc4b89039fa4f77e7af002c6c";
  
  const [weather, setWeather] = useState([]) 
  const [selectedWeatherId, setSelectedWeatherId] = useState();
  const [city, setCity] = useState("")
  const [loading, setLoading] = useState(false);

  const [err , setErr] = useState("")
  
  const {
    latitude,
    longitude,
    error,
  } = usePosition();

  const weatherContextValue = { handleWeatherAdd, handleWeatherDelete, handleWeatherSelect };

  useEffect(() => {

    const weatherJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (weatherJSON != null) setWeather(JSON.parse(weatherJSON))

  }, [])
  
  useEffect(() => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(weather)), [weather]);

  useEffect(() => {
    if (latitude !== undefined || longitude !== undefined) {
      const urlCitis = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pl`;
      const urlInit = `http://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=pl`;
      let url = "";
      
      if (city !== "") url = urlCitis; else url = urlInit;
      
      fetch(url)
      .then(handleError)
      .then(res => res.json())
      .then(
          res => setWeather([...weather, 
          {
            id: res.id,
            city: res.name,
            feels_like: res.main.feels_like, 
            humidity: res.main.humidity, 
            pressure: res.main.pressure, 
            temp: res.main.temp, 
            temp_max: res.main.temp_max, 
            temp_min: res.main.temp_min
          }]
           
        )
      )
      .then(setSelectedWeatherId(weather.id))
      .catch(error => {console.log(error)})

    } else {
      
      setLoading(true);

    }
    
    setLoading(false);

  },[city])



  function handleError(res)  {
    
    if (!res.ok) setErr(res.statusText); else setErr("")
    return res;

  }

  function handleWeatherSelect(id) {
    
    setSelectedWeatherId(id)
    
  }

  function handleWeatherAdd(cityItem) {
    
    setCity(cityItem)

  }
  function handleWeatherDelete(id) {
    
    if (selectedWeatherId !== null && selectedWeatherId === id) setSelectedWeatherId(undefined);
    setCity("");
    setWeather(weather.filter(weather => weather.id !== id));

  }

  return (
    
    <>
    <WeatherContext.Provider value={weatherContextValue}>
      {loading ? <div>??adowanie...</div> : <WeatherList weathers={weather} err={err} />}
    </WeatherContext.Provider> 
    </>

  );
}