import React from 'react';
import './answers.css'
import {nanoid} from "nanoid"

export default function Answers(props){
	let [answers, setAnswers] = React.useState([]);

	let temp = []
	temp.push({
		value: props.object.correct_answer.replace(/&#039;/g,"'").replace(/&quot;/g,'"'),
		correct: true,
		clicked: false,
		id: nanoid()
	})
	for (let i = 0; i < props.object.incorrect_answers.length; i++) {
		temp.push({
			value: props.object.incorrect_answers[i].replace(/&#039;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&'),
			correct: false,
			clicked: false,
			id: nanoid()
		})
	}

	//not perfectly random, but it works for this project
	temp = temp.sort((a, b) => 0.5 - Math.random());

	//setAnswers([1,2,3])
	// function test(arg){
	// 	console.log(arg)
	// }
	
return (
	<span>
		{temp.map(
			function(ans){
				return (
					<button className={`answers ${ans.clicked ? "choice" : ""}`} onClick={() => test(ans.id)}>{ans.value}</button>
				)
			}
		)}
	</span>
);
};


