const Options = ({ buttons, clickFunc, reset, resetFunc }) => {
  return (
    <>
      {buttons.map((rate, index) => (
        <button onClick={() => clickFunc(rate)} key={index}>
          {rate}
        </button>
      ))}
      {reset > 0 && <button onClick={() => resetFunc()}>reset</button>}
    </>
  );
};

export default Options;
