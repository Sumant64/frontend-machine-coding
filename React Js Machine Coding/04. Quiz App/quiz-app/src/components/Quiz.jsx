import React, { useState } from 'react';
import data from '../data/questions.json';
import Question from './Question';
import Result from './Result';

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);

    const handleNextQuestion = (isCorrect) => {
        setCurrentQuestion((prev) => prev + 1);
        setUserAnswers([...userAnswers, isCorrect]);
    }

    const resetQuiz = () => {
        setCurrentQuestion(0);
        setUserAnswers([]);
    }
    
    console.log(data);
  return (
    <div className='App'>
        <h1>World Quiz</h1>

        {/* Question component */}
        {
            currentQuestion < data.length && (
                <Question 
                    question={data[currentQuestion]}
                    onAnswerClick={handleNextQuestion}
                />
            )
        }

        {/* Result */}
        {
            currentQuestion === data.length && (
                <Result 
                    userAnswers = {userAnswers}
                    questions = {data}
                    resetQuiz = {resetQuiz}
                />
            )
        }

    </div>
  )
}

export default Quiz