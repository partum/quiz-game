import React from 'react';

export default function Questions(props){
    let [question, setQuestions] = React.useState(createQuestion());
    function createQuestion(){
        return props.text.replace(/&#039;/g,"'").replace(/&quot;/g,'"').replace(/&amp;/g,'&').replace(/&uuml;/g,'ü')
    }
return (
	<p className="question__text">
        {question}
    </p>
);
};


