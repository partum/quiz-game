import React from 'react';
import './info.css'

export default function Info(props){
    
return (
	<div className='info'>
        <p>{props.category} |</p>
        <p>&nbsp;{props.difficulty}</p>
    </div>
);
};


