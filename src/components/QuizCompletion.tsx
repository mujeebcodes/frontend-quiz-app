type Props = { score: number; title: string; resetQuiz: () => void };
const QuizCompletion = ({ score, title, resetQuiz }: Props) => {
  return (
    <section className="flex flex-col gap-4">
      <div className="text-4xl font-thin">
        <h3>Quiz completed</h3>
        <p className="font-bold">You scored...</p>
      </div>
      <div className="flex flex-col">
        <div className="h-60 p-4 bg-white shadow-xl flex flex-col gap-4 items-center justify-around rounded-xl">
          <p>{title}</p>
          <p className="text-7xl">{score}</p>
          <p>out of 10</p>
        </div>
        <button
          onClick={resetQuiz}
          className="w-full bg-purple p-4 text-white rounded-xl mt-3"
        >
          Play again
        </button>
      </div>
    </section>
  );
};
export default QuizCompletion;
