import React from 'react';
import './answers.css'
import { useAnswers } from '../hooks/useAnswers';

export default function Answers(props) {
	const { answers, chooseAnswer, grade } = useAnswers(props);

	return (
		<span>
			{/*Conditionally renders based on if the answers have been submitted (props.finish)*/}
			{props.finish ?
				answers.map(
					function (ans) {
						return (
							<button key={ans.id} className={`answers ${ans.clicked ? "choice" : ""}`} 
							onClick={() => chooseAnswer(ans.id)} id={ans.id}> {ans.value} </button>
						)
					}
				)
				: answers.map(
					function (ans) {
						return (
							<button key={ans.id} className={`answers ${grade(ans)}`} 
							id={ans.id}> {ans.value} </button>
						)
					}
				)
			}
		</span>
	);
}; 


