import React from 'react';
import Loader from 'react-loader-spinner';

const Loading = () => {
    return(
        <Loader
           type='Oval'
           color='lightgray'
           height={70}
           width={70}
        />
       );
};

export default Loading;