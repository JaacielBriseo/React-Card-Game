export const DisplayCards = ({ toDisplayCards }) => {
  const items = toDisplayCards.map((element, index) => {
    return (
      <div key={index} className="c3">
        {element}
      </div>
    );
  });
  return (
    <>
      <div className="container">{items}</div>
    </>
  );
};
