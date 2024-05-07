import { QuizType } from "./App";

type Props = {
  data: QuizType[];
  setSelectedTopic: React.Dispatch<string>;
};

const StartingPage = ({ data, setSelectedTopic }: Props) => {
  return (
    <section className="flex flex-wrap justify-between">
      <div className="w-full sm:flex-1">
        <h1 className="text-5xl">
          Welcome to the <span className="font-bold">Frontend Quiz!</span>
        </h1>
        <p className="italic">Pick a subject to get started.</p>
      </div>
      <div className="w-full flex flex-col justify-around sm:flex-1">
        <ul>
          {data.map((quizTopic) => {
            return (
              <li
                className="w-5/6 bg-white h-16 rounded-xl"
                key={quizTopic.title}
                onClick={() => setSelectedTopic(quizTopic.title)}
              >
                <span className="w-5 h-5">
                  <img src={quizTopic.icon} alt="HTML" />
                </span>
                {quizTopic.title}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default StartingPage;
