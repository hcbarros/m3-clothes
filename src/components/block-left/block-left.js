
import '../index.css';
import './checkbox.css';
import React, { useState, useEffect } from 'react';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import { useSelector, useDispatch } from 'react-redux';
import $ from 'jquery';
import { setFilter, setOptions, setColors, setPrices, 
         setSizes, setChecked } from '../../actions/actions';
import { arrayClothes, arrayPrices,
         arrayColors, arraySizes } from '../data';


export default function BlockLeft() {

    const filter = useSelector(state => state.filter);
    const reduceColors = useSelector(state => state.reduceColors);
    const reduceSizes = useSelector(state => state.reduceSizes);
    const reducePrices = useSelector(state => state.reducePrices);
    const reduceChecked = useSelector(state => state.reduceChecked);
    const dispatch = useDispatch();
    const [verCores, setVerCores] = useStateWithCallbackLazy(false);   
    const [init, setInit] = useState(true);
    


    const setArray = (checked, array, text) => {

        let arrChecked = reduceChecked.reduceChecked;
        if(checked) {
            array.push(text);
            arrChecked.push(text);
        }
        else {
            array = array.filter(c => c != text);
            arrChecked = arrChecked.filter(c => c != text);
        }
        dispatch(setChecked(arrChecked));
        return array;
    }

    const setDispatch = (objFilter, key) => {

        let options = [];
        arrayClothes.map(c => {

            let colors = null;
            let sizes = null;
            let find = false;

            switch(key) {

                case 'colors':
                    colors = objFilter.colors.filter(color => 
                        c.colors.indexOf(color) >= 0);
                        if(colors.length > 0) find = true;
                break;

                case 'sizes':
                    sizes = objFilter.sizes.filter(size => 
                        c.sizes.indexOf(size) >= 0);
                        if(sizes.length > 0) find = true;
                break;

                case 'prices':
                    if(objFilter.prices.indexOf(c.range) >= 0) find = true;
                break;   
            }

            if(find && objFilter.id.indexOf(c.id) < 0) options.push(c);
        });

        

        let arrColors = [];
        let arrSizes = [];
        let arrPrices = []   ;
        if(options.length > 0) {

            options.map(o => {

                if(key == 'colors') {
                    arrColors = reduceColors.reduceColors;
                    if(arrPrices.indexOf(arrayPrices[o.range]) < 0) {
                        arrPrices.push(arrayPrices[o.range]);
                    }
                    o.sizes.map(s => {
                        if(arrSizes.indexOf(s) < 0) arrSizes.push(s);                
                    })
                }
                else if(key == 'sizes') {
                    arrSizes = reduceSizes.reduceSizes;
                    if(arrPrices.indexOf(arrayPrices[o.range]) < 0) {
                        arrPrices.push(arrayPrices[o.range]);
                    }
                    o.colors.map(c => {
                        if(arrColors.indexOf(c) < 0) arrColors.push(c);                
                    })
                }
                else {
                    arrPrices = reducePrices.reducePrices;
                    o.sizes.map(s => {
                        if(arrSizes.indexOf(s) < 0) arrSizes.push(s);                
                    })
                    o.colors.map(c => {
                        if(arrColors.indexOf(c) < 0) arrColors.push(c);                
                    })
                }
            });

            dispatch(setColors(arrayColors.filter(c => arrColors.indexOf(c) >= 0)));
            dispatch(setSizes(arraySizes.filter(s => arrSizes.indexOf(s) >= 0)));
            dispatch(setPrices(arrayPrices.filter(p => arrPrices.indexOf(p) >= 0)));
        }
        //options = options.length === 0 ? arrayClothes : options;  

        dispatch(setOptions(options));
        dispatch(setFilter(objFilter));

    }


    const checkAction = (evt) => {
  
        const value = JSON.parse(evt.target.value);
        const obj = JSON.parse(evt.target.name);
        const checked = evt.target.checked;
        const objFilter = filter.filter;

        if(obj.colors) {
            objFilter.colors = setArray(checked, objFilter.colors, value.text);
            setDispatch(objFilter,'colors');
        }
        else if(obj.sizes) {
            objFilter.sizes = setArray(checked, objFilter.sizes, value.text);
            setDispatch(objFilter,'sizes');
        }
        else {
            objFilter.prices = setArray(checked, objFilter.prices, value.index);
            setDispatch(objFilter,'prices');
        }

     
    }
    
    
    const blindEffect = () => {
        setVerCores(!verCores);
        $(".line-check-blind").toggle( "blind" );
    }

    const displayChecks = (array, obj) => {

        return array.map((text, index) => 
            <div className={obj.drop ? "line-check-blind" : "line-check"}>
                <label class={obj.sizes ? "container-check-grid" : "container-check"}>                        
                    <input type="checkbox" name={JSON.stringify(obj)} 
                        value={JSON.stringify({index:index,text:text})} 
                        onClick={(evt) => checkAction(evt)} 
                        checked={reduceChecked.reduceChecked.indexOf(text) >= 0}
                    />
                    <span class={!obj.sizes ? "checkmark" : 
                    reduceChecked.reduceChecked.indexOf(text) >= 0 ?  
                    "checkmark-grid-active" : "checkmark-grid"}>
                        {obj.sizes && text}
                    </span>
                </label>    {!obj.sizes && <div>{text}</div>}
            </div>
        );  
    }  

    useEffect(() => {
        $(".line-check-blind").hide();
    },[init]);


    return (
  
        <div className="filters">

            <div className="text-clothers">Blusas</div>
            <div className="text-colors">CORES</div>

            {displayChecks(reduceColors.reduceColors.slice(0,5), {colors: true})}

            {displayChecks(reduceColors.reduceColors.slice(5,10), {drop: true, colors: true})}

            <div className="text-ver-cores" onClick={() => blindEffect()}>
                {verCores ? "Esconder últimas cores" : "Ver todas as cores"} 
            <div className={verCores ? "arrow-down" : "arrow-up"}></div></div>
                    
            <div className="text-sizes">TAMANHOS</div>

            {<div className="wrapper"> {displayChecks(reduceSizes.reduceSizes, {sizes: true})} </div> }

            <div className="text-prices">FAIXA DE PREÇO</div>

            {displayChecks(reducePrices.reducePrices.slice(0,5), {prices: true})}

        </div>
    );
}
