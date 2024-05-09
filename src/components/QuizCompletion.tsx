import { QuizType } from "../App";

type Props = {
  score: number;
  isDarkMode: boolean;
  selectedQuiz: QuizType;
  resetQuiz: () => void;
};
const QuizCompletion = ({
  score,
  selectedQuiz,
  resetQuiz,
  isDarkMode,
}: Props) => {
  return (
    <section
      className={`flex flex-col gap-4 ${
        isDarkMode ? "text-white" : ""
      } lg:flex-row`}
    >
      <div className="text-4xl font-thin lg:w-1/2 lg:text-7xl">
        <h3>Quiz completed</h3>
        <p className="font-bold">You scored...</p>
      </div>
      <div className="flex flex-col lg:w-1/2 lg:text-3xl">
        <div
          className={`h-60 p-4  shadow-xl flex flex-col gap-4 items-center justify-around rounded-xl ${
            isDarkMode ? "bg-light-maroon" : "bg-white"
          }`}
        >
          <p className="flex items-center gap-2">
            <img src={selectedQuiz.icon} alt="" />
            {selectedQuiz.title}
          </p>
          <p className="text-7xl">{score}</p>
          <p>out of 10</p>
        </div>
        <button
          onClick={resetQuiz}
          className="w-full bg-purple p-4 text-white rounded-xl mt-3 hover:bg-opacity-50"
        >
          Play again
        </button>
      </div>
    </section>
  );
};
export default QuizCompletion;
