import React from 'react';
import preloader from '../../../assets/images/Ripple-1s-200px.svg';

const Preloader = () => {
    return <div style={{backgroundColor: "red"}}>
        <img src={preloader} alt = "loading in progress"/>
    </div>
}

export default Preloader;