import React, { useState } from "react";
import { useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);
  console.log(timeRemaining)
  useEffect(() => {
      const countdownID = setTimeout(() => {
        setTimeRemaining(()=> timeRemaining - 1)
        if (timeRemaining === 0){
          setTimeRemaining(10)
          onAnswered(false)
      }},
      1000) //count down time remaining by 1s every 1s from 10s

      return function cleanup (){
        clearTimeout(countdownID)
        }
})

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
