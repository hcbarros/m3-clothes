
import {combineReducers} from 'redux'
import { arrayClothes, initialFilter } from '../components/data';

export const FILTER = 'filter';
export const CART = 'cart';
export const OPTIONS = 'options';
export const REDUCE_CHECKED = 'reduceChecked';


const reduceChecked = (state = {reduceChecked: []}, action) => {
    return action.type === REDUCE_CHECKED ? 
          { ...state, reduceChecked: action.payload } : state;            
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
    reduceChecked
});


export default reducer;
