import axios from 'axios';

const instance = axios.create({
	baseURL: /*Your url here*/
});

export default instance;