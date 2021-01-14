import * as loginTypes from '../constant/login'

const loginInitialState = {
    status: false,
    infoUsers: []
}
const login = (state = loginInitialState, action) => {
    switch (action.type) {
        case loginTypes.LOGIN_SUCCESS:
            localStorage.setItem('loginStatus', true)
            return { ...state, status: true }

        case loginTypes.LOGIN_FAILED:
            localStorage.setItem('loginStatus', false)
            return { ...state, status: false }

        default:
            return state
    }
}

export default login;