import React from 'react';

import './style.scss';

const WidgetTop = ({ temp, icon, name, feels_like}) => {
    return (
        <div className='Widget_Top'>
            <span className='Widget__Text'>{ Math.round(temp)}°</span>
            <img src={ `http://openweathermap.org/img/wn/${icon}@2x.png` } 
                className='Widget__Img' alt='Погода'/>
                
            <span className='Widget__TextOther'>
                <span>{name}</span> 
                <div>
                    <span className='Widget__SmallText'>Ощущается как</span> 
                    { Math.round(feels_like)}°
                </div>
            </span>
        </div>
    );
};

export default WidgetTop;