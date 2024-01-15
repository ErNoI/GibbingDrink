import React, { useEffect, useState } from "react";
import "./quiz.css";
import { getNumberOfDrinks, getEnergyDrinkById } from "../dataHandler";

function Quiz() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState({});
  const [usedIds, setUsedIds] = useState([]);
  const [counter, setCounter] = useState(1);

  const startQuiz = () => {
    const randomQuestion = getEnergyDrinkById(getRandomId());
    setActiveQuestion(randomQuestion);
    setIsQuizStarted(true);
  };

  const closeQuiz = () => {
    setUsedIds([]);
    setCounter(1);
    setScore(0);
    setIsQuizStarted(false);
  };

  function handleAnswer(answer) {
    if (answer === activeQuestion.gibbin) {
      setScore((prevScore) => prevScore + 10);
    }

    setCounter((prevCounter) => prevCounter + 1);
    if (counter === 10) {
      closeQuiz();
    }

    setUsedIds((prevUsedIds) => [...prevUsedIds, activeQuestion.id]);
    generateNewQuestion();
  }

  function generateNewQuestion() {
    setActiveQuestion(getEnergyDrinkById(getRandomId()));
  }

  function getRandomId() {
    const numberOfDrinks = getNumberOfDrinks();
    const randomId = Math.floor(Math.random() * (numberOfDrinks - 1) + 1);

    return randomId;
  }

  return (
    <div>
      <button className="button" onClick={startQuiz}>
        Start Quiz
      </button>

      {isQuizStarted && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeQuiz}>
              &times;
            </span>
            <div>
              <p>IS THIS GIBBING DRINK? </p>
              <p>Score: {score} </p>
              <p>{activeQuestion.name}</p>
              <p>{activeQuestion.type}</p>
            </div>
            <button onClick={() => handleAnswer(true)}>Yes</button>
            <button onClick={() => handleAnswer(false)}>No</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
