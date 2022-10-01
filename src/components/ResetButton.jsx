export const ResetButton = () => {
  const handleReset = () => {
   window.location.reload()
  };
  return (
    <div className="flexReset">
      <button className="resetBtn" onClick={handleReset}>Reset</button>
    </div>
  );
};
