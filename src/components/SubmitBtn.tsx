type Props = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const SubmitBtn = ({ onClick: handleSubmit }: Props) => {
  return (
    <button
      onClick={handleSubmit}
      className="w-full bg-purple p-4 text-white rounded-xl mt-3 hover:bg-opacity-50"
    >
      Submit Answer
    </button>
  );
};
export default SubmitBtn;
