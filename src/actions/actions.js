
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

export const setColors = (colors) => {
    return {
        type: reduce.REDUCE_COLORS,
        payload: colors
    }
}

export const setSizes = (sizes) => {
    return {
        type: reduce.REDUCE_SIZES,
        payload: sizes
    }
}

export const setPrices = (prices) => {
    return {
        type: reduce.REDUCE_PRICES,
        payload: prices
    }
}

export const setChecked = (array) => {
    return {
        type: reduce.REDUCE_CHECKED,
        payload: array
    }
}
