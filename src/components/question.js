import React from 'react';
import './question.css';
import Info from './info';
//import Button from './button';
import Answers from './answers';
import {nanoid} from "nanoid"

export default function Question() {
    let [questions, setQuestions] = React.useState([]);
    let [isLoaded, setIsLoaded] = React.useState(false);
    let [err, setErr] = React.useState(null);


    React.useEffect(function () {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => {
                // Unfortunately, fetch doesn't send (404 error)
                // into the cache itself
                // You have to send it, as I have done below
                if (res.status >= 400) {
                    throw new Error("Server responds with error!")
                }
                return res.json();
            })
            .then(data => {
                setQuestions(data)
                setIsLoaded(true)
            },
                err => {
                    setErr(err)
                    setIsLoaded(true)
                }
            );
    }, [])

    //this should probably be in its own component
    function answersArray(thing) {
        let answers = [];
        answers.push({
            value: thing.correct_answer.replace(/&#039;/g,"'").replace(/&quot;/g,'"'),
            correct: true,
            clicked: false,
            id: nanoid()
        })
        for (let i = 0; i < thing.incorrect_answers.length; i++) {
            answers.push({
                value: thing.incorrect_answers[i].replace(/&#039;/g,"'").replace(/&quot;/g,'"'),
                correct: false,
                clicked: false,
                id: nanoid()
            })
        }
        //not perfectly random, but it works for this project
        answers = answers.sort((a, b) => 0.5 - Math.random());

        return (answers.map(
            function (ans) {
                return (
                    <Answers text={ans.value} clicked={ans.clicked} test={() => test(ans.clicked)}/>
                )
            }
        ))
    };


    if (err) {
        return <div> {err.message} </div>
    } else if (!isLoaded) {
        return <div> Loading... </div>
    } else {
        return (
            <div>
                {questions.results.map(
                    function (q) {
                        return (
                            <div className="question">
                                <Info category={q.category} difficulty={q.difficulty} />
                                <p className="question__text">{q.question.replace(/&#039;/g,"'").replace(/&quot;/g,'"')}</p>
                                {answersArray(q)}
                            </div>
                        );
                    })
                }
            </div>
        );
    }
};


