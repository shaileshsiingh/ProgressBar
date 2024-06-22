import React from 'react';
import './Question.css';

const Question = ({ question, currentQuestion, totalQuestions, handleNext, handlePrev }) => {
  const labels = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];

  return (
    <div className="question-container">
      <div className="question-header">
        <span>IDEALISTIC</span>
        <span>DISILLUSIONED</span>
        <span>CYNICAL</span>
        <span>HOPEFUL</span>
      </div>
      <div className="question-number">{currentQuestion + 1}/{totalQuestions}</div>
      <div className="question-text">{question}</div>
      <div className="options">
        {labels.map((label, index) => (
          <label key={index} className="option-label">
            <input type="radio" name="answer" value={index + 1} /> {label}
          </label>
        ))}
      </div>
      <div className="navigation-buttons">
        <button className="prev" onClick={handlePrev} disabled={currentQuestion === 0}>Prev</button>
        <button className="next" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Question;
