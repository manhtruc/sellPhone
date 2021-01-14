import axios from 'axios'
import { API_ENDPOINT_PRODUCT } from '../constant/products'

const callApi = (endpoint, method = 'get', body) => {
    return axios({
        method: method,
        url: `${API_ENDPOINT_PRODUCT}/${endpoint}`,
        data: body
    });
}

export default callApi;