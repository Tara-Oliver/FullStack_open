const App = () => {
	// const course = "Half Stack application development";
	// const part1 = "Fundamentals of React";
	// const exercises1 = 10;
	// const part2 = "Using props to pass data";
	// const exercises2 = 7;
	// const part3 = "State of a component";
	// const exercises3 = 14;

	// const part1 = {
	// 	name: "Fundamentals of React",
	// 	exercises: 10,
	// };
	// const part2 = {
	// 	name: "Using props to pass data",
	// 	exercises: 7,
	// };
	// const part3 = {
	// 	name: "State of a component",
	// 	exercises: 14,
	// };

	// const parts = [
	// 	{
	// 		name: "Fundamentals of React",
	// 		exercises: 10,
	// 	},
	// 	{
	// 		name: "Using props to pass data",
	// 		exercises: 7,
	// 	},
	// 	{
	// 		name: "State of a component",
	// 		exercises: 14,
	// 	},
	// ];

	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};

	const Part = (props) => {
		return (
			<div>
				<p>
					{props.part.name} {props.part.exercises}
				</p>
			</div>
		);
	};

	const Content = (props) => {
		return (
			<div>
				{props.parts.map((part, idx) => (
					<Part key={idx} part={part} />
				))}
			</div>
		);
	};
	const Header = (props) => {
		return (
			<div>
				<h1>{props.course}</h1>
			</div>
		);
	};
	const Total = (props) => {
		let sum = 0;
		props.parts.forEach((part) => (sum += part.exercises));

		return (
			<div>
				<p>Number of exercises {sum}</p>
			</div>
		);
	};

	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

export default App;
