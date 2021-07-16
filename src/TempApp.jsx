import React , {useState , useEffect} from 'react'
import './index.css';
import {ReactComponent as WeatherIcon} from './ios-weather.svg';
import Weather from './ssc.png';

const TempApp = () => {

    const [city, setCity] = useState('');
    const [search,  setSearch] = useState('Mumbai');
    useEffect(() => {
            const fetchApi = async ()=>
            {
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=ab9cee273a4154790accef4bc39f8ce4`;
                const response =  await fetch(url);
                const resJson = await response.json();
                setCity(resJson.main);
            }

            fetchApi();
        },[search])
    return (
        <>
            <div className="main">
                <div className="box">
                    <div  className="heading">
                            <h1>Weather App</h1>
                            <WeatherIcon className ="weather_icon" />
                    </div>
                    <div className="middle">
                        <img src={Weather} alt="weather.png" className="midweathericon" />
                        <input  spellcheck="false" type="search" className="input_search" onChange={(event)=>
                        {
                            setSearch(event.target.value);
                        }}/>
                    </div>

                    {
                        !city ? ( <p> No data found 🚫 </p>) :( <div>
                            <div className="info">
                                <h2 className="location">{search}</h2>
                                <h2 className="temp">{city.temp}°C</h2>
                                <h3 className="tempminmax">Min {city.temp_min}°C | Max {city.temp_max}°C</h3>
                            </div>
                    </div>
                        )}



                    
                </div>
            </div>
        </>
    )
}

export default TempApp;