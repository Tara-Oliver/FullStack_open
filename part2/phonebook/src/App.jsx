import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import { getAll } from "./services/person";
import Notification from "./components/Notification";

const App = () => {
	const [filteredName, setFilteredName] = useState("");
	const [persons, setPersons] = useState([]);
	const [message, setMessage] = useState(null);
	const [error, setError] = useState(null);

	// const [persons, setPersons] = useState([
	// 	{ name: "Arto Hellas", number: "040-123456", id: 1 },
	// 	{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
	// 	{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
	// 	{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	// ]);

	useEffect(() => {
		getAll().then((intialPersons) => setPersons(intialPersons));
	}, []);

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification message={message} error={error} />
			<Filter filteredName={filteredName} setFilteredName={setFilteredName} />
			<h3>add a new</h3>
			<PersonForm
				persons={persons}
				setPersons={setPersons}
				setMessage={setMessage}
				setError={setError}
			/>
			<h3>Numbers</h3>
			<Persons
				persons={persons}
				filteredName={filteredName}
				setPersons={setPersons}
				setMessage={setMessage}
			/>
		</div>
	);
};

export default App;
