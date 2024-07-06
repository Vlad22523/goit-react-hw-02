const Feedback = ({ rates, total, positive }) => {
  return (
    <ul>
      {Object.keys(rates).map((res, index) => (
        <li key={index}>
          {res}: {rates[res]}
        </li>
      ))}
      <li>Total: {total}</li>
      <li>Positive: {positive}%</li>
    </ul>
  );
};

export default Feedback;
