import axios from "axios";
import React, { useEffect, useState } from "react";

const Country = ({ foundCountry }) => {
	const languages = Object.values(foundCountry.languages);
	const apiKey = import.meta.env.VITE_API_KEY;
	const [lat, lon] = foundCountry.capitalInfo.latlng;
	const [weather, setWeather] = useState(null);
	const fetchWeather = () => {
		const result = axios.get(
			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
		);
		return result.then((response) => setWeather(response.data));
	};
	useEffect(() => {
		fetchWeather();
	}, []);

	return (
		<div>
			<h1>{foundCountry.name.common}</h1>
			<div>Capital {foundCountry.capital[0]}</div>
			<div>Area {foundCountry.area}</div>
			<ul>
				<h2>Languages</h2>
				{languages.map((lang) => (
					<li key={lang}>{lang}</li>
				))}
			</ul>
			<img src={foundCountry.flags.png} alt={foundCountry.flags.alt} />
			<h2>{`Weather in ${foundCountry.capital}`}</h2>
			<div>{`Temperature ${weather?.main.temp} Celsius`}</div>
			<div>Currently: {weather?.weather[0].description}</div>
			<img
				src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
			/>
			<div>{`Wind ${weather?.wind.speed} m/s`}</div>
		</div>
	);
};

export default Country;
