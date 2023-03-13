import React from 'react';
import './question.css';
import Info from './info';
import Button from './button';
import Answers from './answers';

export default function Question(props) {
    const [questions, setQuestions] = React.useState({})


    React.useEffect(function () {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuestions(data))
    }, [])

    function answersArray(thing) {
        let answers = [];
        answers.push(thing.correct_answer)
        for (let i = 0; i < thing.incorrect_answers.length; i++) {
            answers.push(thing.incorrect_answers[i])
        }
        //not perfectly random, but it works for this project
        answers = answers.sort((a, b) => 0.5 - Math.random());
        return(answers.map(
            function (ans){
                return(
                    <Answers text={ans}/>
                )
            }
        ))
    }
   

    return (
        <div>
            {questions.results.map(
                function (q) {
                    return (
                        <div className="question">
                            <Info category={q.category} difficulty={q.difficulty} />
                            <p className="question__text">{q.question}</p>
                            {answersArray(q)}
                        </div>
                    );
                })
            }
        </div>
    );
}; 


