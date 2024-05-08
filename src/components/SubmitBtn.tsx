type Props = {
  disabled: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const SubmitBtn = ({ onClick: handleSubmit, disabled }: Props) => {
  return (
    <button
      onClick={handleSubmit}
      disabled={disabled}
      className="w-full bg-purple p-4 text-white rounded-xl mt-3"
    >
      Submit Answer
    </button>
  );
};
export default SubmitBtn;
