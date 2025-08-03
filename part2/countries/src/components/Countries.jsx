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
		const foundCountry = matchingCountries[0];
		const languages = Object.values(foundCountry.languages);
		const apiKey = import.meta.env.VITE_API_KEY;
		const [lat, lon] = foundCountry.capitalInfo.latlng;
		// console.log(lat, lang);

		return (
			// <div>
			// 	<h1>{foundCountry.name.common}</h1>
			// 	<div>Capital {foundCountry.capital[0]}</div>
			// 	<div>Area {foundCountry.area}</div>
			// 	<ul>
			// 		{languages.map((lang) => (
			// 			<li key={lang}>{lang}</li>
			// 		))}
			// 	</ul>
			// 	<img src={foundCountry.flags.png} alt={foundCountry.flags.alt} />
			// </div>
			<Country foundCountry={foundCountry} />
		);
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
