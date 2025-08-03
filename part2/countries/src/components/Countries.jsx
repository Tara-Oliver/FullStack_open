import React from "react";
import Country from "./Country";

const Countries = ({ countries, searchText, setSearchText }) => {
	if (countries.length === 0 || searchText.length === 0) {
		return null;
	}
	const matchingCountries = countries.filter((item) =>
		item.name.common.toLowerCase().includes(searchText.toLowerCase())
	);
	if (matchingCountries.length === 1) {
		return <Country foundCountry={foundCountry} />;
	}
	return (
		<div>
			{matchingCountries.length >= 10 ? (
				<div>Too many matches specify another filter</div>
			) : (
				<div>
					{matchingCountries.map((country) => (
						<div key={country.ccn3}>
							<div>
								<span>{country.name.common} </span>
								<button onClick={() => setSearchText(country.name.common)}>
									show
								</button>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Countries;
