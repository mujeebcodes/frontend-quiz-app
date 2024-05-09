import StartingPage from "./components/StartingPage";

import { useState } from "react";
import data from "./data.json";
import Quiz from "./components/Quiz";
import QuizCompletion from "./components/QuizCompletion";
import Toggle from "./components/Toggle";

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
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const selectedQuiz = quizData.find((quiz) => quiz.title === selectedTopic);

  const resetQuiz = () => {
    setSelectedTopic("");
    setScore(0);
    setIsQuizCompleted(false);
  };
  return (
    <div
      className={`min-h-screen container mx-auto p-8 text-blue-gray flex flex-col gap-y-5  font-Rubik h-screen  bg-no-repeat bg-contain lg:pt-20 ${
        isDarkMode
          ? "bg-maroon bg-dark-bg-mobile md:bg-dark-bg-tablet lg:bg-dark-bg-desktop"
          : "bg-off-white bg-light-bg-mobile md:bg-light-bg-tablet lg:bg-light-bg-desktop"
      }`}
    >
      <header className="flex justify-between">
        <div>
          {selectedQuiz && (
            <div className="flex items-center gap-4">
              <div className="w-10 h-10">
                <img src={selectedQuiz.icon} alt={selectedQuiz.title} />
              </div>
              <p className={`font-bold ${isDarkMode ? "text-white" : ""}`}>
                {selectedQuiz.title}
              </p>
            </div>
          )}
        </div>
        <Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      </header>
      <main>
        {!selectedTopic && (
          <StartingPage
            data={quizData}
            isDarkMode={isDarkMode}
            setSelectedTopic={setSelectedTopic}
          />
        )}

        {selectedTopic && selectedQuiz && !isQuizCompleted && (
          <Quiz
            quiz={selectedQuiz}
            isDarkMode={isDarkMode}
            score={score}
            setScore={setScore}
            setIsQuizCompleted={setIsQuizCompleted}
          />
        )}

        {isQuizCompleted && (
          <QuizCompletion
            score={score}
            isDarkMode={isDarkMode}
            selectedQuiz={selectedQuiz ? selectedQuiz : ""}
            resetQuiz={resetQuiz}
          />
        )}
      </main>
    </div>
  );
}

export default App;
