type Props = { score: number; title: string; resetQuiz: () => void };
const QuizCompletion = ({ score, title, resetQuiz }: Props) => {
  return (
    <section>
      <div>
        <h3>Quiz completed</h3>
        <p>You scored...</p>
      </div>
      <div>
        <div>
          <p>{title}</p>
          <p>{score}</p>
          <p>out of 10</p>
        </div>
        <button onClick={resetQuiz}>Play again</button>
      </div>
    </section>
  );
};
export default QuizCompletion;
