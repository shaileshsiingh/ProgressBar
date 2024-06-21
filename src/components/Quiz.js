import React, { useState } from 'react';
import Question from './Questions';
import './Quiz.css';

const Quiz = () => {
  const questions = [
    "I have ambitious aims of making a difference.",
    "My leadership journey has progressed as I anticipated.",
    "I have spent fewer than 4 years in full time service or ministry.",
    "With hard work and determination, I have been able to persevere through the ministry challenges that have come my way."
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleNext = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const handlePrev = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const progressPercentage = (currentQuestion + 1) / questions.length * 100;

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>ARE YOU DISILLUSIONED?</h1>
      </div>
      <div className="progress-bar">
        <div className="progress-indicator" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <Question
        question={questions[currentQuestion]}
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
};

export default Quiz;
