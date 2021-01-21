import axios from 'axios';
import Constants from '../utils/constants';

export default {
    addNewUser(payload) {
        console.log('Action called', payload);
        return axios.post(Constants.URL_REGISTER, payload);
    }
}