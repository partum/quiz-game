import React from 'react';
import './button.css'

export default function Button(props){
	return (
		props.link?
			<a href={props.link}>{props.text}</a>
			: <button>{props.text}</button>
		
		
	);
};


