import { call, fork, put, take, delay } from 'redux-saga/effects'
import * as productTypes from '../../constant/products'
import { getList } from '../../apis/apiProducts'
import { fetchListProductSuccess, fetchListProductFailed } from '../../actions/productAction'

function* watchFetchListProduct() {
    yield take(productTypes.FETCH_LIST_PRODUCT)
    const resp = yield call(getList)

    const { data, status } = resp

    if (status === productTypes.STATUS.SUCCESS) {
        yield put(fetchListProductSuccess(data))
    } else {
        yield put(fetchListProductFailed(data))
    }

}

function* rootSaga() {
    yield fork(watchFetchListProduct)
}

export default rootSaga;