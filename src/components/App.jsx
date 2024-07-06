import { useEffect, useState } from "react";
import Descriptions from "./Descriptions/Descriptions";
import Options from "./Options/Options";
import Feedback from "./Feedback/Feedback";
import Notification from "./Notification/Notification";

function App() {
  const [response, setResponse] = useState(() => {
    const saveData = JSON.parse(window.localStorage.getItem("votes"));
    if (saveData) {
      return saveData;
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const handleClick = (option) => {
    setResponse((prev) => ({ ...prev, [option]: prev[option] + 1 }));
  };

  const totalFeedBack = Object.values(response).reduce(
    (acc, vote) => acc + vote,
    0
  );

  const positiveFeedback = Math.round((response.good / totalFeedBack) * 100);

  const onReset = () => {
    setResponse({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  useEffect(() => {
    window.localStorage.setItem("votes", JSON.stringify(response));
  }, [response]);

  return (
    <>
      <Descriptions></Descriptions>
      <Options
        resetFunc={onReset}
        reset={totalFeedBack}
        clickFunc={handleClick}
        buttons={Object.keys(response)}
      ></Options>
      {totalFeedBack > 0 ? (
        <Feedback
          positive={positiveFeedback}
          total={totalFeedBack}
          rates={response}
        ></Feedback>
      ) : (
        <Notification></Notification>
      )}
    </>
  );
}

export default App;
