type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const NextQuestionBtn = ({ onClick: handleClick }: Props) => {
  return <button onClick={handleClick}>Next Question</button>;
};
export default NextQuestionBtn;
