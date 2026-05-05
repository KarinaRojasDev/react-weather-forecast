import { useEffect,useState } from 'react'
import SearchForm from "./components/SearchForm/SearchForm"
import WeatherList from "./components/WeatherList/WeatherList";
import axios from "axios"

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

useEffect(() => {

  const handleSuccess = async (position) => {
      const { latitude, longitude } = position.coords; 
      
      try {
        
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);

        const data = response.data;

        //  establecemos ciudad 
        setCity(data.name);

      } catch (error) {
        console.log(error);
        setCity("Madrid");
      }
    };
      
    // si no acepta permisos
    const handleError = () => {
      setCity("Madrid"); 
    };

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError);

}, []);

useEffect(() => {
  if (!city) return;

  const getWeather = async ()=>{
    try{
      // Petición a la API con la ciudad actual
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`);

      const data = response.data;

      // Creamos un objeto para agrupar por día
      const group = data.list.reduce((acc,item) => {

        // Extraemos solo la fecha (sin la hora)
        const date = item.dt_txt.split(" ")[0];

        // Si esa fecha no existe en el objeto, la creamos
        if(!acc[date]){
          acc[date] = [];
        }

        // Añadimos el item a ese día
        acc[date].push(item);
        return acc;

      }, {});

      // Convertimos el objeto en array
      const weatherDay = Object.keys(group).map(date => ({
        date,
        hours: group[date]
      }));

      setWeatherData(weatherDay);
    
    } catch (error) {
      console.log(error);
    }
  }
  getWeather();

},[city, apiKey]);

  return (
    <>
      <SearchForm city={city} setCity={setCity}/>
      <WeatherList weatherData={weatherData} />
    </>
  )
}

export default App
