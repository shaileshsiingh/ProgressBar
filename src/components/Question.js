import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Question.css';

const Question = ({ question, currentQuestion, totalQuestions, handleNext, handlePrev }) => {
  const labels = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      handleNext();
      setSelectedOption(null);
    }, 1000); // Time for the slider animation before moving to the next question
  };

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
        <div className="slider-container">
          <div className="slider-line">
            <motion.div
              className="fill-slider"
              initial={{ width: 0 }}
              animate={{
                width: selectedOption !== null ? `${(selectedOption + 1) * 20}%` : 0,
              }}
              transition={{
                duration: 0.5,
                repeatType: 'reverse',
                repeat: isAnimating ? 1 : 0
              }}
            />
            {labels.map((label, index) => (
              <div key={index} className="option-container" onClick={() => handleOptionSelect(index)}>
                <div className="dot"></div>
                <label className="option-label">{label}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="navigation-buttons">
        <button className="prev" onClick={handlePrev} disabled={currentQuestion === 0}>Prev</button>
        <button className="next" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Question;
