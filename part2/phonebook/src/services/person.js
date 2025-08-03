import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

export const create = (item) => {
	const request = axios.post(baseUrl, item);
	return request.then((response) => response.data);
};

export const getAll = () => {
	const request = axios.get(baseUrl);
	return request.then((response) => response.data);
};

export const deletePerson = (id) => {
	return axios.delete(`${baseUrl}/${id}`);
};

export const update = (id, item) => {
	const request = axios.put(`${baseUrl}/${id}`, item);
	return request.then((response) => response.data);
};
