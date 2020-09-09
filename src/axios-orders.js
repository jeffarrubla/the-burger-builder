import axios from 'axios';

const instance = axios.create({
	//baseURL: /*your url here, use a firebase realtime database*/
});

export default instance;