import React, { Component } from 'react';

import './style.scss';
import ShowWeather from '../ShowWeather';

export default class App extends Component {


    render () {
        return(
            <div className='WeatherApp'>
                <ShowWeather />
            </div>
        );
    };
};