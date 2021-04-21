
export const setCart = (cart) => {
    return {
        type: 'cart',
        payload: cart
    }
}

export const setFilter = (filter) => {
    return {
        type: 'filter',
        payload: filter
    }
}

export const setOptions = (options) => {
    return {
        type: 'options',
        payload: options
    }
}

export const setColors = (colors) => {
    return {
        type: 'arrayColors',
        payload: colors
    }
}

export const setSizes = (sizes) => {
    return {
        type: 'arraySizes',
        payload: sizes
    }
}

export const setPrices = (prices) => {
    return {
        type: 'arrayPrices',
        payload: prices
    }
}