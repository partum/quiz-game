import React from "react";
import Question from "../components/question"

let foo = 5;
fetch("https://opentdb.com/api.php?amount=5")
    .then(res => res.json())
    .then(data => foo = data);

const Quiz = () => {
return (
	<div>
	{foo.results.map(function(q){
		return <Question text={q.question}/>;
	})}
	{/* <Question text={foo.results[0].question}/> */}
	</div>
);
};

export default Quiz;
