
import {combineReducers} from 'redux'
import { arrayClothes, arrayColors as ac, arrayPrices as ap, initialFilter,
         arraySizes as asizes } from '../components/data';


const arrayColors = (state = {arrayColors: ac}, action) => {
    return action.type === 'arrayColors' ? 
          { ...state, arrayColors: action.payload } : state;            
}

const arraySizes = (state = {arraySizes: asizes}, action) => {
    return action.type === 'arraySizes' ? 
          { ...state, arraySizes: action.payload } : state;            
}

const arrayPrices = (state = {arrayPrices: ap}, action) => {
    return action.type === 'arrayPrices' ? 
          { ...state, arrayPrices: action.payload } : state;            
}

const filter = (state = {filter: initialFilter}, action) => {
    return action.type === 'filter' ? 
          { ...state, filter: action.payload } : state;            
}

const cart = (state = {cart: []}, action) => {
    return action.type === 'cart' ? 
          { ...state, cart: action.payload } : state;            
}

const options = (state = {options: arrayClothes}, action) => {
    return action.type === 'options' ? 
          { ...state, options: action.payload } : state;            
}


const reducer = combineReducers({
    filter,
    cart,
    options,
    arraySizes,
    arrayPrices,
    arrayColors
});


export default reducer;
