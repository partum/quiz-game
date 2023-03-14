import React from 'react';
import './answers.css'



export default function Answers(props){
return (
	<button className={`answers ${props.clicked ? "choice" : ""}`} onClick={props.test}>{props.text}</button>
);
};


