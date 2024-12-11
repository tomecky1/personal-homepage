import axios from 'axios';

export const getRepositories = username => axios.get(`${githubAPI}/users/${username}/repos`).then(response => response.data);