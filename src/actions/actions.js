
import * as reduce from '../reducers/reducer';


export const setCart = (cart) => {
    return {
        type: reduce.CART,
        payload: cart
    }
}

export const setFilter = (filter) => {
    return {
        type: reduce.FILTER,
        payload: filter
    }
}

export const setOptions = (options) => {
    return {
        type: reduce.OPTIONS,
        payload: options
    }
}

export const setChecked = (array) => {
    return {
        type: reduce.REDUCE_CHECKED,
        payload: array
    }
}
