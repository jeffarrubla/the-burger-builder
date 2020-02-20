import axios from 'axios';

const instance = axios.create({
	baseURL: /* yout url here*/
});

export default instance;