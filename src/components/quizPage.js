import React from 'react';
import './quizPage.css';
import Info from './info';
import Button from './button';
import Answers from './answers';
import Questions from './question'
import { useFetchQuestions } from '../hooks/useFetchQuestions';



export default function Question() {
    const { questions, isLoaded, err, refetch } = useFetchQuestions();
    let [finish, setFinish] = React.useState(true);

    //flips the finish variable when the user clicks submit
    function grade() {
        setFinish(prevFinish => !prevFinish)
    }

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
                            <div className="question" key={q.correct_answer}> 
                                <Info category={q.category} difficulty={q.difficulty} />
                                <Questions text={q.question} />
                                <Answers object={q} func={grade} finish={finish} />
                            </div>
                        );
                    })
                }
                <div className='quiz__button'>
                    {finish?
                     <Button text="submit" grade={grade} />
                     :  <Button text="reset" grade={refetch} /> 
                }
                </div>
            </div>
        );
    }
};


