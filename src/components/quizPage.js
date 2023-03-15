import React from 'react';
import './quizPage.css';
import Info from './info';
//import Button from './button';
import Answers from './answers';
import Questions from './question'


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
                                <Questions text={q.question}/>
                                <span>
                                    <Answers object={q}/>
                                </span>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
};


