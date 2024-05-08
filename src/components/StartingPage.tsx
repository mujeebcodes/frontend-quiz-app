import { QuizType } from "../App";

type Props = {
  data: QuizType[];
  setSelectedTopic: React.Dispatch<string>;
};

const StartingPage = ({ data, setSelectedTopic }: Props) => {
  return (
    <section className="flex flex-col gap-5 lg:flex-row">
      <div className="w-full sm:flex-1 lg:w-1/2">
        <h1 className="text-5xl lg:mb-5">
          Welcome to the <span className="font-bold">Frontend Quiz!</span>
        </h1>
        <p className="italic">Pick a subject to get started.</p>
      </div>
      <div className="lg:w-1/2">
        <ul className="flex flex-col gap-4 cursor-pointer">
          {data.map((quizTopic) => {
            return (
              <li
                className="px-4 flex items-center gap-3 w-5/6 bg-white h-16 rounded-xl shadow-xl"
                key={quizTopic.title}
                onClick={() => setSelectedTopic(quizTopic.title)}
              >
                <span className="w-5 h-5 bg-red-50">
                  <img src={quizTopic.icon} alt={quizTopic.title} />
                </span>
                <p>{quizTopic.title}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default StartingPage;
