import React from "react";

const Total = ({ parts }) => {
	const totalParts = parts.reduce((total, num) => total + num.exercises, 0);

	return <h4>total of {totalParts} exercises</h4>;
};

export default Total;
