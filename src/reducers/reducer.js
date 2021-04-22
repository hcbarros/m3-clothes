
import {combineReducers} from 'redux'
import { arrayClothes, arrayPrices, initialFilter,
         arraySizes, arrayColors } from '../components/data';

export const REDUCE_COLORS = 'reduceColors';
export const REDUCE_SIZES = 'reduceSizes';
export const REDUCE_PRICES = 'reducePrices';
export const FILTER = 'filter';
export const CART = 'cart';
export const OPTIONS = 'options';
export const REDUCE_CHECKED = 'reduceChecked';


const reduceChecked = (state = {reduceChecked: []}, action) => {
    return action.type === REDUCE_CHECKED ? 
          { ...state, reduceChecked: action.payload } : state;            
}

const reduceColors = (state = {reduceColors: arrayColors}, action) => {
    return action.type === REDUCE_COLORS ? 
          { ...state, reduceColors: action.payload } : state;            
}

const reduceSizes = (state = {reduceSizes: arraySizes}, action) => {
    return action.type === REDUCE_SIZES ? 
          { ...state, reduceSizes: action.payload } : state;            
}

const reducePrices = (state = {reducePrices: arrayPrices}, action) => {
    return action.type === REDUCE_PRICES ? 
          { ...state, reducePrices: action.payload } : state;            
}

const filter = (state = {filter: initialFilter}, action) => {
    return action.type === FILTER ? 
          { ...state, filter: action.payload } : state;            
}

const cart = (state = {cart: []}, action) => {
    return action.type === CART ? 
          { ...state, cart: action.payload } : state;            
}

const options = (state = {options: arrayClothes}, action) => {
    return action.type === OPTIONS ? 
          { ...state, options: action.payload } : state;            
}


const reducer = combineReducers({
    filter,
    cart,
    options,
    reduceSizes,
    reducePrices,
    reduceColors,
    reduceChecked
});


export default reducer;
