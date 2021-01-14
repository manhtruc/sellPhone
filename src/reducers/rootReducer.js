import { combineReducers } from 'redux';
import product from './productsReducer'
import login from './loginReducer'


const rootReducer = combineReducers({
    product,
    login
})

export default rootReducer;

