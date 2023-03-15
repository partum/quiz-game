import React from 'react';

export default function Questions(props){
    
return (
	<p className="question__text">
        {props.text.replace(/&#039;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&')}
    </p>
);
};


