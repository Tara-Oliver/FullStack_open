import React from "react";

const Search = ({ searchText, setSearchText }) => {
	const handleChange = (e) => {
		setSearchText(e.target.value);
	};

	return (
		<div>
			find countries <input value={searchText} onChange={handleChange} />
		</div>
	);
};

export default Search;
