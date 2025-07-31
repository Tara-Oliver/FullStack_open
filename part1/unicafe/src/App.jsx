import { useState } from "react";

const Button = ({ onClick, text }) => {
	return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
	return (
		<tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
	);
};

const Statistics = ({ good, neutral, bad }) => {
	const total = good + bad + neutral;

	if (total === 0) {
		return <div>No feedback given</div>;
	}

	return (
		<table>
			<tbody>
				<StatisticLine text="good" value={good} />
				<StatisticLine text="neutral" value={neutral} />
				<StatisticLine text="bad" value={bad} />
				<StatisticLine text="all" value={total} />
				<StatisticLine text="positive" value={`${(good / total) * 100} %`} />
				<StatisticLine text="average" value={(good - bad) / 3} />
			</tbody>
		</table>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleGoodClick = () => {
		const updatedGood = good + 1;
		setGood(updatedGood);
	};

	const handleNeutralClick = () => {
		const updatedNeutral = neutral + 1;
		setNeutral(updatedNeutral);
	};

	const handleBadClick = () => {
		// setAll(allClicks.concat("L"));
		const updatedBad = bad + 1;
		setBad(updatedBad);
		// setTotal(updatedLeft + right);
	};

	return (
		<div>
			<h2>give feedback</h2>
			<Button onClick={handleGoodClick} text="good" />
			<Button onClick={handleNeutralClick} text="neutral" />
			<Button onClick={handleBadClick} text="bad" />
			<h2>statistics</h2>
			<Statistics good={good} bad={bad} neutral={neutral} />
		</div>
	);
};

export default App;
