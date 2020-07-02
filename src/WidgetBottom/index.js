import React from 'react';

import './style.scss';

const WidgetBottom = (props) => {
    return (
        <div className='Widget_Bottom'>
            <div className='Widget__Other'>
                <img src={require('./image/pres.png')} className='Widget__Logo' alt='Давление'/>
                <span className='Widget__TextOther'>Давление { props.pressure } мм рт. ст.</span>
            </div>
            <div className='Widget__Other'>
                <img src={require('./image/wat.png')} className='Widget__Logo' alt='Влажность'/>
                <span className='Widget__TextOther'>Влажность { props.humidity }%</span>
            </div>
        </div>
    );
};

export default WidgetBottom;