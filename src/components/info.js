import React from 'react';
import './info.css'

export default function Info(props){

function createInfo(){
return props.category + " | " + props.difficulty
}

return (
	<div className='info'>
        <p>{createInfo()}</p>  
    </div>
);
};


