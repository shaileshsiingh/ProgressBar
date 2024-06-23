import React, { useState, useEffect } from 'react';
import Question from './Question';
import { motion } from 'framer-motion';
import './Quiz.css';

const Quiz = () => {
  const questions = [
    "I have ambitious aims of making a difference.",
    "My leadership journey has progressed as I anticipated.",
    "I have spent fewer than 4 years in full time service or ministry.",
    "With hard work and determination, I have been able to persevere through the ministry challenges that have come my way."
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };


  useEffect(() => {
    if (isCompleted) {
      const timer = setTimeout(() => {
        setIsCompleted(false);
        setCurrentQuestion(0);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isCompleted]);

  return (
    <div className="quiz-container">
     
    
      <div className="question-wrapper">
        {isCompleted ? (
          <div className="completion-message">Completed!</div>
        ) : (
          <Question
            question={questions[currentQuestion]}
            currentQuestion={currentQuestion}
            totalQuestions={questions.length}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
