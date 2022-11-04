import StatisticLine from "./StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <StatisticLine text="good" value={good} />
      <br />
      <StatisticLine text="neutral" value={neutral} />
      <br />
      <StatisticLine text="bad" value={bad} />
      <br />

      <StatisticLine text="all" value={good + bad + neutral} />
      <br />
      <StatisticLine text="average" value={(good + bad + neutral) / 3} />
      <br />
      <StatisticLine
        text="positive"
        value={((good + bad + neutral) * 100) / 3 + "%"}
      />
    </div>
  );
};

export default Statistics;
