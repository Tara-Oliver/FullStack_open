import React from "react";
import { useState } from "react";
import { create, update } from "../services/person";

const PersonForm = ({ persons, setPersons, setMessage, setError }) => {
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");

	const handleNameChange = (e) => {
		setNewName(e.target.value);
	};

	const handleNumberChange = (e) => {
		setNewNumber(e.target.value);
	};

	const handleNewSubmit = (e) => {
		e.preventDefault();
		const newPerson = {
			name: newName,
			number: newNumber,
		};

		const foundPerson = persons.find(
			(person) => person.name.toLowerCase() === newName.toLowerCase()
		);

		const updatedPerson = { ...foundPerson, number: newNumber };

		if (foundPerson) {
			if (
				window.confirm(
					`${newName} is already added to the phonebook, replace the old number with a new one?`
				)
			) {
				update(foundPerson.id, updatedPerson)
					.then((returnedPerson) => {
						// console.log(returnedPerson);
						setPersons(
							persons.map((person) =>
								person.id === foundPerson.id ? returnedPerson : person
							)
						);
						setMessage(`Number updated for ${foundPerson.name}`);
						setTimeout(() => {
							setMessage(null);
						}, 4000);
					})
					.catch((error) => {
						setError(
							`Information of ${foundPerson.name} has already been removed from the server`
						);
						setTimeout(() => {
							setError(null);
						}, 4000);
						setPersons(persons.filter((item) => item.id !== foundPerson.id));
					});
			}
		} else {
			create(newPerson).then((returnedPerson) => {
				setPersons(persons.concat(returnedPerson));
			});
			setMessage(`Added ${newPerson.name}`);
			setTimeout(() => {
				setMessage(null);
			}, 4000);
		}
		setNewName("");
		setNewNumber("");
	};

	return (
		<form onSubmit={handleNewSubmit}>
			<div>
				name: <input onChange={handleNameChange} value={newName} />
			</div>
			<div>
				number: <input onChange={handleNumberChange} value={newNumber} />
			</div>
			<div>
				<button type="submit">add</button>
			</div>
		</form>
	);
};

export default PersonForm;
