
import {combineReducers} from 'redux'
import { arrayClothes } from '../components/data';


const initialFilter = {colors: [], prices: [], sizes: []};

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
    options
});


export default reducer;
