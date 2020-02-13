import axios from 'axios';

const instance = axios.create({
	baseURL: /* put your url here */
});

export default instance;