import axios from 'axios';

const instance = axios.create({
	baseURL: /*your url here*/
});

export default instance;