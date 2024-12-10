import axios from "axios";

const githubAPI = "https://api.github.com";


export const getRepositories = username => axios.get(`${githubAPI}/users/${username}/repos`).then(response => response.data);