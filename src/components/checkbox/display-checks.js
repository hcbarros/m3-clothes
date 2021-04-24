
import '../../assets/css/index.css';
import '../../assets/css/checkbox.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, setOptions, setChecked } from '../../actions/actions';
import { arrayClothes, arrayPrices } from '../../data/data';


export default function DisplayChecks(props) {

    const reduceChecked = useSelector(state => state.reduceChecked);
    const filter = useSelector(state => state.filter);
    const dispatch = useDispatch();


    const checkAction = (evt) => {

        const setArray = (checked, array, value, prices) => {

            let arrChecked = reduceChecked.reduceChecked;
            if(checked) {
                array.push(prices ? arrayPrices.indexOf(value.text) : value.text);
                arrChecked.push(value.text);
            }
            else {
                array = array.filter(c => c != (prices ? arrayPrices.indexOf(value.text) : value.text));
                arrChecked = arrChecked.filter(c => c != value.text);
            }
            dispatch(setChecked(arrChecked));
            return array;
        }


        const setDispatch = (objFilter, key) => {

            let options = [];
            const getColors = (c) => {
                if(objFilter.colors.length > 0) {
                    const colors = objFilter.colors.filter(color => 
                        c.colors.indexOf(color) >= 0);
                        return colors.length > 0;                            
                }   
                return true;
            }
            const getSizes = (c) => {
                if(objFilter.sizes.length > 0) {
                    const sizes = objFilter.sizes.filter(size => 
                        c.sizes.indexOf(size) >= 0);
                        return sizes.length > 0;        
                }   
                return true;
            }
            const getPrices = (c) => {
                if(objFilter.prices.length > 0){
                    return objFilter.prices.indexOf(c.range) >= 0;        
                }
                return true;
            }

            arrayClothes.map(c => {

                let find = false;

                switch(key) {

                    case 'colors':
                        const colors = objFilter.colors.filter(color => 
                            c.colors.indexOf(color) >= 0);
                        find = colors.length > 0;
                        let findS = getSizes(c);
                        let findP = getPrices(c);
                        find = (find || objFilter.colors.length === 0) && findS && findP;
                    break;

                    case 'sizes':
                        const sizes = objFilter.sizes.filter(size => 
                            c.sizes.indexOf(size) >= 0);
                        find = sizes.length > 0;
                        let findC = getColors(c);
                        let findP2 = getPrices(c);
                        find = (find || objFilter.sizes.length === 0) && findC && findP2;
                    break;

                    default:
                        find = objFilter.prices.indexOf(c.range) >= 0;
                        let findC2 = getColors(c);
                        let findS2 = getSizes(c);
                        find = (find || objFilter.prices.length === 0) && findC2 && findS2;
                    break;   
                }

                if(find && objFilter.id.indexOf(c.id) < 0) options.push(c);
            });


            if(options.length === 0) {
                options = reduceChecked.reduceChecked.length === 0 ? 
                        arrayClothes : [];
            }

            dispatch(setOptions(options));
            dispatch(setFilter(objFilter));
        }


        const value = JSON.parse(evt.target.value);
        const obj = JSON.parse(evt.target.name);
        const checked = evt.target.checked;
        const objFilter = filter.filter;

        if(obj.colors) {
            objFilter.colors = setArray(checked, objFilter.colors, value, false);
            setDispatch(objFilter,'colors');
        }
        else if(obj.sizes) {
            objFilter.sizes = setArray(checked, objFilter.sizes, value, false);
            setDispatch(objFilter,'sizes');
        }
        else {
            objFilter.prices = setArray(checked, objFilter.prices, value, true);
            setDispatch(objFilter,'prices');
        }
    
    }


    return props.array.map((text, index) => 
        <div className={props.obj.drop ? "line-check-blind" : "line-check"}>
            <label class={props.obj.sizes ? "container-check-grid" : "container-check"}>                        
                <input type="checkbox" name={JSON.stringify(props.obj)} 
                    value={JSON.stringify({index:index,text:text})} 
                    onClick={(evt) => checkAction(evt)} 
                    checked={reduceChecked.reduceChecked.indexOf(text) >= 0}
                />
                <span class={!props.obj.sizes ? "checkmark" : 
                reduceChecked.reduceChecked.indexOf(text) >= 0 ?  
                "checkmark-grid-active" : "checkmark-grid"}>
                    {props.obj.sizes && text}
                </span>
            </label>    {!props.obj.sizes && <div>{text}</div>}
        </div>
    );  
}  


