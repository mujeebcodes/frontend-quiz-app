import { useState } from "react";
import { QuizType } from "../App";
import NextQuestionBtn from "./NextQuestionBtn";
import SubmitBtn from "./SubmitBtn";

type Props = {
  quiz: QuizType,
  setScore: React.Dispatch<number>,
  score: number,
  setIsQuizCompleted: React.Dispatch<boolean>,
};
const Quiz = ({ quiz, setScore, score, setIsQuizCompleted }: Props) => {
  const [questionNumber, setQuestionNumber] = useState < number > 0;
  const [selectedOption, setSelectedOption] = useState < string > "";
  const [selectedOptionIndex, setSelectedOptionIndex] = useState < number > -1;
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState < boolean > false;

  const questions = quiz.questions;
  const totalQuestions = questions.length;
  const progress = ((questionNumber + 1) / totalQuestions) * 100;
  const isCorrectAnswer =
    questionNumber < totalQuestions
      ? selectedOption === questions[questionNumber].answer
      : false;

  const letters = ["A", "B", "C", "D"];

  const submitAnswer = () => {
    if (!selectedOption) {
      return;
    }
    if (isCorrectAnswer) {
      setScore(score + 1);
    }

    setIsAnswerSubmitted(true);
  };

  const getNextQuestion = () => {
    setSelectedOption("");
    setIsAnswerSubmitted(false);
    if (questionNumber === totalQuestions - 1) {
      setIsQuizCompleted(true);
    }
    if (questionNumber < totalQuestions - 1) {
      setQuestionNumber((questionNumber) => questionNumber + 1);
    }
  };

  const handleOptionSelect = (option: string, index: number) => {
    setSelectedOption(option);
    setSelectedOptionIndex(index);
  };

  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <p>
          Question {questionNumber + 1} of {totalQuestions}
        </p>
        <h2 className="font-bold">{questions[questionNumber].question}</h2>
        <div className="bg-white w-full shadow-lg h-4 rounded-lg flex items-center">
          <div
            className="bg-purple h-1/2 rounded-lg"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-4 cursor-pointer">
          {questions[questionNumber].options.map((option, index) => {
            return (
              <li
                key={option}
                onClick={() => handleOptionSelect(option, index)}
                className={`px-4 flex items-center gap-3 w-full bg-white h-16 rounded-xl shadow-xl ${
                  isAnswerSubmitted &&
                  isCorrectAnswer &&
                  selectedOptionIndex === index
                    ? "bg-green-100"
                    : ""
                } ${
                  isAnswerSubmitted &&
                  !isCorrectAnswer &&
                  selectedOptionIndex === index
                    ? "bg-red-100"
                    : ""
                } ${
                  selectedOptionIndex === index ? "border-purple border-2" : ""
                }`}
              >
                <span
                  className={`w-10 h-10 flex items-center justify-center  rounded-md ${
                    selectedOptionIndex === index
                      ? "border-purple border-2 bg-purple text-white"
                      : "bg-gray-50"
                  }`}
                >
                  {letters[index]}
                </span>
                {option}
              </li>
            );
          })}
        </ul>
        {isAnswerSubmitted ? (
          <NextQuestionBtn onClick={getNextQuestion} />
        ) : (
          <SubmitBtn onClick={submitAnswer} disabled={!selectedOption} />
        )}
      </div>
      <p></p>
    </section>
  );
};
export default Quiz;
