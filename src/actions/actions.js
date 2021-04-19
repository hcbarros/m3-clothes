
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