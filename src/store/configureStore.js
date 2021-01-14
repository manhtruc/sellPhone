import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "../reducers/rootReducer";
import rootSaga from "../redux/sagas/rootSaga";

const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false
    }) : compose

const sagaMiddleware = createSagaMiddleware()

// nếu có thêm redux router thì truyền function vào arrow function
const configureStore = () => {

    const middleware = [sagaMiddleware]
    const enhancers = [
        applyMiddleware(...middleware)
    ]

    const store = createStore(rootReducer, composeEnhancers(...enhancers))
    sagaMiddleware.run(rootSaga)
    return store
}

export default configureStore;