import React, {useEffect, useState} from 'react';
import CloudIcon from '@material-ui/icons/Cloud';
import './index.css';
import axios from 'axios';

const Weather = ()=>
{
    const [gotWeather, setGotWeather] = useState("not");
    useEffect(() =>
    {
        const fetchData=async() => 
        {
            try{
                const getPosition = async (position)=> 
                {
                    const {latitude, longitude} = position.coords;    
                    const apiKey = "9f42cfac504e902e729390351ddcef0b";
                    const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
                    const response = await axios.get(ApiUrl);
                    const data = await response.data;
                    const celsius = (data.main.temp - 273.15).toFixed(2);
                    setGotWeather(celsius)
                }

                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(getPosition);
                }
                
            }
            catch(error)
            {
                console.error('Mi error :C  : ', error);
            }
        }
        fetchData();
    }, []);

    return(
        <div className='weather'>
        <p>El clima actual es de: {(gotWeather === "not" ? "Recibiendo datos..." : `${gotWeather}°C`)}</p>
        <CloudIcon/>
    </div>
    )
};

export default Weather;
