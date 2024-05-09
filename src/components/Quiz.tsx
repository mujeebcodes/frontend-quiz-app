import { useState } from "react";
import { QuizType } from "../App";
import NextQuestionBtn from "./NextQuestionBtn";
import SubmitBtn from "./SubmitBtn";
import Correct from "./icons/Correct";
import Wrong from "./icons/Wrong";

type Props = {
  quiz: QuizType;
  isDarkMode: boolean;
  setScore: React.Dispatch<number>;
  score: number;
  setIsQuizCompleted: React.Dispatch<boolean>;
};
const Quiz = ({
  quiz,
  setScore,
  score,
  setIsQuizCompleted,
  isDarkMode,
}: Props) => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(-1);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [cannotSubmit, setCannotSubmit] = useState<boolean>(false);

  const questions = quiz.questions;
  const totalQuestions = questions.length;
  const progress = ((questionNumber + 1) / totalQuestions) * 100;
  const isCorrectAnswer =
    questionNumber < totalQuestions
      ? selectedOption === questions[questionNumber].answer
      : false;

  const correctOptionIndex = questions[questionNumber].options.findIndex(
    (option) => option === questions[questionNumber].answer
  );

  const letters = ["A", "B", "C", "D"];

  const submitAnswer = () => {
    if (!selectedOption) {
      setCannotSubmit(true);
      return;
    }

    if (!cannotSubmit) {
      if (isCorrectAnswer) {
        setScore(score + 1);
      }

      setIsAnswerSubmitted(true);
    }
  };

  const getNextQuestion = () => {
    setSelectedOption("");
    setSelectedOptionIndex(-1);
    setIsAnswerSubmitted(false);
    if (questionNumber === totalQuestions - 1) {
      setIsQuizCompleted(true);
    }
    if (questionNumber < totalQuestions - 1) {
      setQuestionNumber((questionNumber) => questionNumber + 1);
    }
  };

  const handleOptionSelect = (option: string, index: number) => {
    setCannotSubmit(false);
    setSelectedOption(option);
    setSelectedOptionIndex(index);
  };
  return (
    <section
      className={`flex flex-col gap-10 lg:flex-row ${
        isDarkMode ? "text-white" : ""
      }`}
    >
      <div className="flex flex-col gap-4 lg:w-1/2 lg:gap-14 ">
        <p className="italic">
          Question {questionNumber + 1} of {totalQuestions}
        </p>
        <h2 className="font-bold lg:text-5xl">
          {questions[questionNumber].question}
        </h2>
        <div
          className={`w-full px-1 shadow-lg h-4 rounded-lg flex items-center ${
            isDarkMode ? "bg-light-maroon" : "bg-white"
          }`}
        >
          <div
            className="bg-purple h-1/2 rounded-lg"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <ul className={`flex flex-col gap-4 cursor-pointer`}>
          {questions[questionNumber].options.map((option, index) => {
            return (
              <li
                key={option}
                onClick={() => handleOptionSelect(option, index)}
                className={`px-4 flex items-center justify-between gap-3 w-full  h-16 rounded-xl shadow-xl ${
                  isDarkMode ? "bg-light-maroon" : "bg-white"
                }  ${
                  !isAnswerSubmitted && selectedOptionIndex === index
                    ? "border-purple border-2"
                    : ""
                } ${
                  isAnswerSubmitted &&
                  isCorrectAnswer &&
                  selectedOptionIndex === index &&
                  "border-2 border-light-green"
                } ${
                  isAnswerSubmitted &&
                  !isCorrectAnswer &&
                  selectedOptionIndex === index &&
                  "border-2 border-light-red"
                }`}
              >
                <div className="flex items-center gap-x-2">
                  <span
                    className={`w-10 h-10 flex items-center justify-center  rounded-md 
                     ${isDarkMode && "text-black"} ${
                      !isAnswerSubmitted &&
                      selectedOptionIndex === index &&
                      "bg-purple text-white"
                    } ${
                      isAnswerSubmitted &&
                      isCorrectAnswer &&
                      selectedOptionIndex === index &&
                      "bg-light-green text-white"
                    } ${
                      isAnswerSubmitted &&
                      !isCorrectAnswer &&
                      selectedOptionIndex === index &&
                      "bg-light-red text-white"
                    } ${
                      !isAnswerSubmitted && !selectedOption && "bg-off-white"
                    } `}
                  >
                    {letters[index]}
                  </span>
                  <p>{option}</p>
                </div>
                <span>
                  {isAnswerSubmitted && index === correctOptionIndex ? (
                    <Correct />
                  ) : (
                    ""
                  )}
                  {isAnswerSubmitted &&
                    !isCorrectAnswer &&
                    selectedOptionIndex === index && <Wrong />}
                </span>
              </li>
            );
          })}
        </ul>
        {isAnswerSubmitted ? (
          <NextQuestionBtn onClick={getNextQuestion} />
        ) : (
          <SubmitBtn onClick={submitAnswer} />
        )}
        {cannotSubmit && (
          <p className="pt-4 flex justify-center items-center gap-2">
            <Wrong />
            <span> Please select an answer</span>
          </p>
        )}
      </div>
    </section>
  );
};
export default Quiz;
