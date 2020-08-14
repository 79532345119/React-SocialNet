import React from 'react';
import './myProfileInfo.css'

const MyProfileInfo = ()=>{
    return(
    <div className="myProfileInfo">
       
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR01mUdp62kN2vyu7FWyXLNKdhJSrjnnHsdfQ&usqp=CAU"/>
        
        <div className="userName">User name: "Mikhail"</div>
        <div className="userAge">User age:44</div>
    </div>
    )
}

export default MyProfileInfo;