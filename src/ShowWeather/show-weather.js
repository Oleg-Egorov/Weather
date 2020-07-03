import React, { Component } from 'react';
import axios from 'axios';

import './style.scss';

import Loading from '../Loading';
import WidgetTop from '../WidgetTop';
import WidgetBottom from '../WidgetBottom';
import ErrorMessage from '../ErrorMessage';

export default class ShowWeather extends Component {

    state = {
        loading: true,
        error: false,

        temp: null,
        feels_like: null,
        temp_min: null,
        temp_max: null,
        pressure: null,
        humidity: null,

        name: null,
        description: null,
        icon: null,
        id: null,
    }

    updateWeather() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { coords: { latitude, longitude } } = position;
                
                if (latitude !== 'null' && longitude !== 'null') {
                    this.fetchWeather(latitude, longitude) ;
                }
            },
            () => {
                this.setState ({
                    error: true,
                    loading: false
                })
            }
        );
    }

    componentDidMount() {
        this.updateWeather();
    }
    
    fetchWeather(lat, lon) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=ru&appid=1613dc8f6c0b2cd694eb4bae5e5962c8&units=metric`)
            .then((body) => {
                const dataMain = body.data.main;
                const dataWeather = body.data.weather[0];
                
                this.setState({
                    loading: false,

                    temp: dataMain.temp,
                    feels_like: dataMain.feels_like,
                    pressure: dataMain.pressure,
                    humidity: dataMain.humidity,

                    icon: dataWeather.icon,
                    id: dataWeather.id,

                    name:  body.data.name
                });
            })
    };
    
    render(){
        const { temp, 
                feels_like, 
                pressure, 
                humidity, 
                name,
                loading, 
                error,
                icon } = this.state;

        const Weather = () => {
            return(
                <React.Fragment>

                    <WidgetTop temp = {temp} 
                               feels_like = {feels_like} 
                               icon = {icon} 
                               name = {name}/>
                            
                    <WidgetBottom pressure = {pressure} 
                                  humidity = {humidity} />
                </React.Fragment>
            );
        };

        if (error) {
            return (
                <div className='Widget'>
                    <ErrorMessage />
                </div>
            )
        }

        return(
            <div className='Widget'>
                { loading ? <Loading /> : <Weather /> }
            </div>
        );
    };
};