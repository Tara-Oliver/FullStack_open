import React from "react";

const Filter = ({ filteredName, setFilteredName }) => {
	const handleFilterChange = (e) => {
		setFilteredName(e.target.value);
	};

	return (
		<div>
			filter shown with:{" "}
			<input value={filteredName} onChange={handleFilterChange} />
		</div>
	);
};

export default Filter;
