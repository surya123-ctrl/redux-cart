import { ActionTypes } from "../constants/action-types"
import fakeStoreApi from "../../apis/fakeStoreApi"
export const fetchProducts = () => {
    return async (dispatch) => {

        const response = await fakeStoreApi.get('/products')
        console.log(response);
        dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data })
    }
}
export const fetchProductDetails = (id) => {
    return async (dispatch) => {

        const response = await fakeStoreApi.get(`/products/${id}`)
        console.log(response);
        dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data })
    }
}

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}
export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    }
}