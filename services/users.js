import axios from 'axios';
import Constants from '../utils/constants';

export default {
    getUsers() {
        return axios.get(Constants.URL_USERS);
    },
    updateUser(payload) {
        return axios.put(Constants.URL_USERS, payload);
    },
    deleteUser(name) {
        return axios.delete(Constants.URL_USERS + '/' + name);
    }
}