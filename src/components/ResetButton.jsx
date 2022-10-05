export const ResetButton = () => {
  const handleReset = () => {
    window.location.reload();
  };
  return (
    <button className="resetBtn" onClick={handleReset}>
      Reset
    </button>
  );
};
