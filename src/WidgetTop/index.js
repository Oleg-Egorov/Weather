import React from 'react';

import './style.scss';

const WidgetTop = (props) => {
    return (
        <div className='Widget_Top'>
            <span className='Widget__Text'>{ Math.round(props.temp)}°</span>
            <img src={ `http://openweathermap.org/img/wn/${props.icon}@2x.png` } 
                className='Widget__Img' alt='Погода'/>
                
            <span className='Widget__TextOther'>
                <span>{props.name}</span> 
                <div>
                    <span className='Widget__SmallText'>Ощущается как</span> 
                    { Math.round(props.feels_like)}°
                </div>
            </span>
        </div>
    );
};

export default WidgetTop;