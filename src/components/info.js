import React from 'react';
import './info.css'

export default function Info(props){

let [info, setInfo] = React.useState(createInfo)

function createInfo(){
return props.category + " | " + props.difficulty
}

return (
	<div className='info'>
        <p>{info}</p>  
    </div>
);
};


