import React, { useEffect, useState } from "react";
import "./quiz.css";
import { getNumberOfDrinks, getEnergyDrinkById } from "../dataHandler";
import ScrollButton from "../buttons/ScrollButton";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";
import Card from "../Card/Card";

function Quiz() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState({});
  const [usedIds, setUsedIds] = useState([]);
  const [counter, setCounter] = useState(0);

  const startQuiz = () => {
    console.log("start quiz");
    const randomQuestion = getEnergyDrinkById(getRandomId());
    setActiveQuestion(randomQuestion);
    setIsQuizStarted(true);
  };

  useEffect(() => {
    if (counter === 10) {
      closeQuiz();
    }
  }, [counter]);

  function handleAnswer(answer) {
    if (answer === activeQuestion.gibbin) {
      setScore((prevScore) => prevScore + 10);
    }
    setCounter((prevCounter) => prevCounter + 1);
    setUsedIds((prevUsedIds) => [...prevUsedIds, activeQuestion.id]);
    generateNewQuestion();
  }

  const closeQuiz = () => {
    setUsedIds([]);
    setCounter(0);
    setScore(0);
    setIsQuizStarted(false);
  };

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
      <button className="button headerButton" onClick={startQuiz}>
        Start Quiz
      </button>
      <ScrollButton onClick={() => startQuiz()} />

      {isQuizStarted && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeQuiz}>
              &times;
            </span>
            <div className="flexColumn">
              <h2> IS THIS A GIBBING DRINK?</h2>
              <h2> SCORE: {score}</h2>
              <Card drink={activeQuestion} />
              <div className="answer-buttons">
                <div
                  className="circle-icon green"
                  onClick={() => handleAnswer(true)}
                >
                  <FaRegCircleCheck />
                </div>
                <div
                  className="circle-icon red"
                  onClick={() => handleAnswer(false)}
                >
                  <FaRegCircleXmark />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
