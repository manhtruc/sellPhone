import * as productTypes from '../constant/products'

const productInitialState = {
    listProduct: [],
    listProductToCart: [],
    idProductActive: null
}
const product = (state = productInitialState, action) => {
    switch (action.type) {
        case productTypes.FETCH_LIST_PRODUCT_SUCCESS:
            const listProduct = action.payload
            return { ...state, listProduct }

        // cart 
        case productTypes.INIT_PRODUCT_IN_CART:
            let dataProductToCartInit = []
            if (localStorage.getItem('dataProductToCartInit') === null) {
                localStorage.setItem('dataProductToCartInit', JSON.stringify(dataProductToCartInit))
            } else {
                const init = JSON.parse(localStorage.getItem('dataProductToCartInit'))
                dataProductToCartInit = dataProductToCartInit.concat(init)
            }
            return { ...state, listProductToCart: dataProductToCartInit }

        case productTypes.ADD_TO_CART:
            let listProductCart = [...state.listProductToCart];
            const productExist = listProductCart.find(product => product.id === action.payload);
            if (productExist)
                productExist.qty += 1;
            else
                listProductCart.push({
                    id: action.payload,
                    qty: 1
                })

            localStorage.setItem('dataProductToCartInit', JSON.stringify(listProductCart))

            return { ...state, listProductToCart: listProductCart, idProductActive: action.payload }

        case productTypes.DELETE_PRODUCT_IN_CART:
            const idDelete = action.payload
            const listProductDeleted = state.listProductToCart.filter(item => item.id !== idDelete)

            localStorage.setItem('dataProductToCartInit', JSON.stringify(listProductDeleted))

            return { ...state, listProductToCart: listProductDeleted }

        case productTypes.UPDATE_QUANTITY_PRODUCT:
            const { id, qty } = action.payload
            const listUpdateQuantity = [...state.listProductToCart]
            listUpdateQuantity.forEach(item => {
                if (item.id === id) {
                    item.qty = qty
                }
            })

            localStorage.setItem('dataProductToCartInit', JSON.stringify(listUpdateQuantity))


            return { ...state, listProductToCart: listUpdateQuantity }

        case productTypes.CLOSE_THE_ORDER:
            const resetList = []
            localStorage.setItem('dataProductToCartInit', JSON.stringify(resetList))

            return { ...state, listProductToCart: resetList }

        default:
            return state
    }
}

export default product;