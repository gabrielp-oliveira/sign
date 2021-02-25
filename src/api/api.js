import axios from 'axios';

const serverUrl = process.env.REACT_APP_SERVER_URL?process.env.REACT_APP_SERVER_URL:'http://localhost:8080'
console.log(serverUrl)
const api = axios.create({
    baseURL: serverUrl
});

export default api;