import * as productTypes from '../constant/products'

export const fetchListProduct = () => {
    return {
        type: productTypes.FETCH_LIST_PRODUCT
    }
}

export const fetchListProductSuccess = (payload) => {
    return {
        type: productTypes.FETCH_LIST_PRODUCT_SUCCESS,
        payload
    }
}

export const fetchListProductFailed = (payload) => {
    return {
        type: productTypes.FETCH_LIST_PRODUCT_FAILED,
        payload
    }
}

export const addToCart = (payload) => {
    return {
        type: productTypes.ADD_TO_CART,
        payload
    }
}

export const deleteProductInCart = (payload) => {
    return {
        type: productTypes.DELETE_PRODUCT_IN_CART,
        payload
    }
}

export const updateQuantityProduct = (payload) => {
    return {
        type: productTypes.UPDATE_QUANTITY_PRODUCT,
        payload
    }
}

export const initProductInCart = () => {
    return {
        type: productTypes.INIT_PRODUCT_IN_CART,
    }
}

export const closeTheOrder = () => {
    return {
        type: productTypes.CLOSE_THE_ORDER,
    }
}

