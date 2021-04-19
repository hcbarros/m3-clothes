
import {combineReducers} from 'redux'
import { arrayClothes } from '../components/data';


const cart = (state = {cart: []}, action) => {
    return action.type === 'cart' ? 
          { ...state, cart: action.payload } : state;            
}

const filter = (state = {filter: arrayClothes}, action) => {
    return action.type === 'filter' ? 
          { ...state, filter: action.payload } : state;            
}



const reducer = combineReducers({
    cart,
    filter
});


export default reducer;
