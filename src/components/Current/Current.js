import React, { useState , useEffect } from 'react'
import axios from 'axios'
import './Styles.css'

function Current() {

    const apiKey = 'fe21c3ed35281d0904acc45ed5966fc1'; 
    const [currentWeather, setCurrentWeather] = useState(null);  
    const [location, setLocation] = useState('');

    useEffect(() => {
        fetchData();
    }, [])

    async function fetchData() {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem("location")}&appid=${apiKey}&units=metric`);
            setCurrentWeather(response.data);
            setLocation(response.data.name);
            console.log(response.data);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="Current">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="left">
                            <h1 className="display-3">{location ? location : ""}, IN</h1> <br /> <br />
                            <div className="left-outer">
                                <div className="innr text-center">
                                    {currentWeather && (
                                        <>
                                            <img src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`} alt="Weather Icon" width="100px" />
                                            <h4>{currentWeather.weather[0].main}</h4>
                                        </>
                                    )}
                                </div>
                                <div className="innr text-center">
                                    <div><h1 className="display-1">{currentWeather ? currentWeather.main.temp : ""}</h1></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-md-6">
                        <div className="right">
                            <div className="outer">
                                <div className="inner">
                                    {currentWeather ? currentWeather.main.humidity : ""} <br />
                                    Humidity
                                </div>
                                <div className="inner">
                                    {currentWeather ? currentWeather.wind.speed : ""} kmph<br />
                                    Wind Speed
                                </div>
                                <div className="inner">
                                    {currentWeather ? currentWeather.clouds.all : ""} <br />
                                    Cloud
                                </div>
                            </div> 
                            <div className="outer">
                                <div className="inner">
                                    {currentWeather ? currentWeather.main.temp_min : ""} <br />
                                    Min temp
                                </div>
                                <div className="inner">
                                    {currentWeather ? currentWeather.main.temp_max : ""} <br />
                                    Max temp
                                </div>
                                <div className="inner">
                                    {currentWeather ? currentWeather.wind.deg : ""} <br />
                                    Wind <br />
                                    Direction
                                </div>
                            </div>       
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Current;
