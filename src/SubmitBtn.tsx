type Props = {
  disabled: boolean;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
const SubmitBtn = ({ onClick: handleSubmit, disabled }: Props) => {
  return (
    <button onClick={handleSubmit} disabled={disabled}>
      Submit Answer
    </button>
  );
};
export default SubmitBtn;
