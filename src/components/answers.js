import React from 'react';
import './answers.css'
import { nanoid } from "nanoid"

export default function Answers(props) {
	let [answers, setAnswers] = React.useState(createAnswers());

	function createAnswers() {
		let temp = []
		temp.push({
			value: props.object.correct_answer.replace(/&#039;/g, "'").replace(/&quot;/g, '"'),
			correct: true,
			clicked: false,
			id: nanoid()
		})
		for (let i = 0; i < props.object.incorrect_answers.length; i++) {
			temp.push({
				value: props.object.incorrect_answers[i].replace(/&#039;/g, "'").replace(/&quot;/g, '"').replace(/&amp;/g, '&'),
				correct: false,
				clicked: false,
				id: nanoid()
			})
		}
		//not perfectly random, but it works for this project
		temp = temp.sort((a, b) => 0.5 - Math.random());
		return temp;
	}

	function chooseAnswer(id) {
		setAnswers(oldAnswers => oldAnswers.map(ans => {
			return { ...ans, clicked: false }
		}))
		setAnswers(oldAnswers => oldAnswers.map(ans => {
			return ans.id === id ?
				{ ...ans, clicked: !ans.clicked } :
				ans
		}))
	}

	//returns css classes based on if the user selected a right/wrong answer
	function grade(ans) {
		if (ans.clicked && ans.correct) {
			return "right"
		}
		else if (ans.clicked && !ans.correct) {
			return "wrong"
		}
	}



	return (
		<span>
			{/*Conditionally renders based on if the answers have been submitted (props.finish)*/}
			{props.finish ?
				answers.map(
					function (ans) {
						return (
							<button className={`answers ${ans.clicked ? "choice" : ""}`} onClick={() => chooseAnswer(ans.id)} id={ans.id}>{ans.value}</button>
						)
					}
				)
				: answers.map(
					function (ans) {
						return (
							<button className={`answers ${grade(ans)}`} id={ans.id}>{ans.value}</button>
						)
					}
				)
			}
		</span>
	);
};


