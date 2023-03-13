import React from "react";
import Question from "../components/question"




const Quiz = () => {
return (
	<div>
	{/* {questions.results.map(function(q){
		return <Question text={q.question}/>;
	})} */}
	{/* <Question text={foo.results[0].question}/> */}
	<Question/>
	</div>
);
};

export default Quiz;
