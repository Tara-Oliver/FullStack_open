import React from "react";
import { deletePerson } from "../services/person";

const Persons = ({ persons, filteredName, setPersons, setMessage }) => {
	if (persons.length === 0) {
		return null;
	}

	return (
		<div>
			{persons
				.filter((item) =>
					item?.name?.toLowerCase().includes(filteredName.toLowerCase())
				)
				.map((person) => (
					<div key={person.id}>
						<span>{person.name}</span> <span>{person.number}</span>
						<button
							onClick={() => {
								if (window.confirm(`Delete ${person.name} ?`)) {
									deletePerson(person.id);
									setPersons(persons.filter((item) => item.id !== person.id));
									setMessage(`${person.name} deleted`);
									setTimeout(() => {
										setMessage(null);
									}, 4000);
								}
							}}>
							delete
						</button>
					</div>
				))}
		</div>
	);
};

export default Persons;
