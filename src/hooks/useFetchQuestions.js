import { useState, useEffect } from 'react';
export function useFetchQuestions() {
        const [questions, setQuestions] = useState([]);
        const [isLoaded, setIsLoaded] = useState(false);
        const [err, setErr] = useState(null);
        const [trigger, setTrigger] = useState(0);

        const refetch = () => setTrigger((prev) => prev + 1);

        useEffect(function () {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => {
                if (res.status >= 400) {
                    throw new Error("Server responds with an error!")
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
    }, [trigger]) 

    return { questions, isLoaded, err, refetch };
}


