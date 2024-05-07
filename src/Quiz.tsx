import { useState } from "react";
import { QuizType } from "./App";
import NextQuestionBtn from "./NextQuestionBtn";
import SubmitBtn from "./SubmitBtn";

type Props = {
  quiz: QuizType;
  setScore: React.Dispatch<number>;
  score: number;
  setIsQuizCompleted: React.Dispatch<boolean>;
};
const Quiz = ({ quiz, setScore, score, setIsQuizCompleted }: Props) => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);

  const questions = quiz.questions;
  const totalQuestions = questions.length;
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
  return (
    <section>
      <div>
        <p>
          Question {questionNumber + 1} of {totalQuestions}
        </p>
        <h2>{questions[questionNumber].question}</h2>
      </div>
      <div>
        <ul>
          {questions[questionNumber].options.map((option, index) => {
            return (
              <li key={option} onClick={() => setSelectedOption(option)}>
                <span>{letters[index]}</span>
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
