import * as loginTypes from '../constant/login'

export const loginSuccess = () => {
    return {
        type: loginTypes.LOGIN_SUCCESS,
    }
}

export const loginFailed = () => {
    return {
        type: loginTypes.LOGIN_FAILED,
    }
}

export const saveInfoUsers = (payload) => {
    return {
        type: loginTypes.SAVE_INFO_USERS,
        payload
    }
}