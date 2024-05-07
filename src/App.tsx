import StartingPage from "./StartingPage";

import { useState } from "react";
import data from "./data.json";
import Quiz from "./Quiz";
import QuizCompletion from "./QuizCompletion";

export type QuizType = {
  title: string;
  icon: string;
  questions: {
    question: string;
    options: string[];
    answer: string;
  }[];
};
function App() {
  const [quizData, setQuizData] = useState<QuizType[]>(data.quizzes);
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState<boolean>(false);

  const selectedQuiz = quizData.find((quiz) => quiz.title === selectedTopic);

  const resetQuiz = () => {
    setSelectedTopic("");
    setScore(0);
    setIsQuizCompleted(false);
  };
  return (
    <div className="flex flex-col font-Rubik h-screen bg-light-bg-mobile bg-no-repeat bg-contain p-4">
      <header>
        <div>{selectedQuiz && selectedQuiz.title}</div>
        <div>toggle</div>
      </header>
      <main>
        {!selectedTopic && (
          <StartingPage data={quizData} setSelectedTopic={setSelectedTopic} />
        )}

        {selectedTopic && selectedQuiz && !isQuizCompleted && (
          <Quiz
            quiz={selectedQuiz}
            score={score}
            setScore={setScore}
            setIsQuizCompleted={setIsQuizCompleted}
          />
        )}

        {isQuizCompleted && (
          <QuizCompletion
            score={score}
            title={selectedQuiz ? selectedQuiz.title : ""}
            resetQuiz={resetQuiz}
          />
        )}
      </main>
    </div>
  );
}

export default App;
