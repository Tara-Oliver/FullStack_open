import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import Countries from "./components/Countries";

const App = () => {
	const [searchText, setSearchText] = useState("");
	const [countries, setCountries] = useState([]);

	const fetchCountries = () => {
		const result = axios.get(
			"https://studies.cs.helsinki.fi/restcountries/api/all"
		);
		return result.then((response) => response.data);
	};
	useEffect(() => {
		fetchCountries().then((allCountries) => setCountries(allCountries));
	}, []);

	// console.log(countries[0].name.common);
	return (
		<div>
			<Search searchText={searchText} setSearchText={setSearchText} />
			<Countries
				countries={countries}
				searchText={searchText}
				setSearchText={setSearchText}
			/>
		</div>
	);
};

export default App;
