type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const NextQuestionBtn = ({ onClick: handleClick }: Props) => {
  return (
    <button
      onClick={handleClick}
      className="w-full bg-purple p-4 text-white rounded-xl mt-3 hover:bg-opacity-50"
    >
      Next Question
    </button>
  );
};
export default NextQuestionBtn;
