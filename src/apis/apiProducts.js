import callApi from '../commons/axiosApi'

export const getList = () => {
    return callApi('products', 'get', null)
}