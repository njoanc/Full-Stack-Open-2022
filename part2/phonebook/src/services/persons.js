import axios from 'axios';

const baseUrl = '/api/persons';
let token = null;

const setToken = (newToken) => {
    token = `bearer ${newToken}`;
};

const createNew = (newPerson) => {
    const config = {
        headers: { Authorization: token }
    };
    const newData = axios.post(baseUrl, newPerson, config);
    return newData.then((response) => response.data);
};

const updateOne = (id, newPerson) => {
    const data = axios.patch(`${baseUrl}/${id}`, newPerson);
    return data.then((response) => response.data);
};

const deleteOne = (id) => {
    const data = axios.delete(`${baseUrl}/${id}`);
    if (data) {
        return data.then((response) => response.data);
    } else {
        return { message: 'The contact does not exist' };
    }
};

const getAll = () => {
    const request = axios.get(baseUrl);
    return request.then((response) => response.data);
};
export default { getAll, createNew, updateOne, deleteOne, setToken };
