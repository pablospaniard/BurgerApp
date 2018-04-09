import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-d74db.firebaseio.com/'
});

export default instance;