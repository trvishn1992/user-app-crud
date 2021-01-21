import axios from 'axios';
import Constants from '../utils/constants';

export default {
    authenticateUser(payload) {
        return axios.post(Constants.URL_LOGIN, payload);
    }
}