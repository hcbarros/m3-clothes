
import '../index.css';
import './checkbox.css';
import React, { useState, useEffect } from 'react';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import { useSelector, useDispatch } from 'react-redux';
import $ from 'jquery';
import { setFilter, setOptions, setColors, setPrices, 
         setSizes } from '../../actions/actions';
import { arrayChecked, arrayClothes } from '../data';


export default function BlockLeft() {

    const filter = useSelector(state => state.filter);
    const arrayColors = useSelector(state => state.arrayColors);
    const arraySizes = useSelector(state => state.arraySizes);
    const arrayPrices = useSelector(state => state.arrayPrices);
    const dispatch = useDispatch();
    const [verCores, setVerCores] = useStateWithCallbackLazy(false);   
    const [init, setInit] = useState(true);
    const [gridChecked, setGridChecked] = useStateWithCallbackLazy(arrayChecked);


    const setArray = (checked, array, text) => {
        if(checked) array.push(text);
        else {
            array = array.filter(c => c != text);
        }
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

        alert(JSON.stringify(options))


        let arrColors = [];
        let arrSizes = [];
        let arrPrices = [];
        if(options.length > 0) {

            options.map(o => {  
                
                alert(JSON.stringify(o))    

                o.colors.map(c => {
                    if(arrColors.indexOf(c) < 0) arrColors.push(c); 
                }); 
                o.sizes.map(s => {
                    if(arrSizes.indexOf(s) < 0) arrSizes.push(s); 
                }); 
                
                if(arrPrices.indexOf(o.range) < 0) arrPrices.push(o.range); 
                
            }); 
            dispatch(setColors(arrColors));
            dispatch(setSizes(arrSizes));
            dispatch(setPrices(arrPrices));
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
            let array = gridChecked;
            array[value.index] = evt.target.checked;
            setGridChecked(array, () => {});

            objFilter.sizes = setArray(checked, objFilter.sizes, value.text);
            setDispatch(objFilter,'sizes');
        }
        else {
            objFilter.prices = setArray(checked, objFilter.prices, value.index);
            setDispatch(objFilter,'prices');
        }

        // let options = [];
        // arrayClothes.map(c => {

        //     let colors = null;
        //     let sizes = null;
        //     let find = false;

          
        //     colors = objFilter.colors.filter(color => 
        //             c.colors.indexOf(color) >= 0);
              
        //     sizes = objFilter.sizes.filter(size => 
        //             c.sizes.indexOf(size) >= 0);    
            
        //     if(objFilter.prices.indexOf(c.range) >= 0 &&
        //     objFilter.id.indexOf(c.id) < 0) {
    
        //     }
        // });

        // //options = options.length === 0 ? arrayClothes : options;  

        // dispatch(setOptions(options));
        // dispatch(setFilter(objFilter));


        // let find = false;
        // objFilter.colors.map(color => {
        //     if(c.colors.indexOf(color) >= 0 &&
        //     objFilter.id.indexOf(c.id) < 0) find = true;    
        // });
        // if(!find) {
        //     objFilter.sizes.map(size => {
        //         if(c.sizes.indexOf(size) >= 0 &&
        //         objFilter.id.indexOf(c.id) < 0) find = true;    
        //     });  
        // }
        // if(!find) {
        //     if(objFilter.prices.indexOf(c.range) >= 0 &&
        //     objFilter.id.indexOf(c.id) < 0) find = true;    
        // }
        // if(find) options.push(c);




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
                    />
                    <span class={!obj.sizes ? "checkmark" : gridChecked[index] ?  
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

            {displayChecks(arrayColors.arrayColors.slice(0,5), {colors: true})}

            {displayChecks(arrayColors.arrayColors.slice(5,10), {drop: true, colors: true})}

            <div className="text-ver-cores" onClick={() => blindEffect()}>
                {verCores ? "Esconder últimas cores" : "Ver todas as cores"} 
            <div className={verCores ? "arrow-down" : "arrow-up"}></div></div>
                    
            <div className="text-sizes">TAMANHOS</div>

            {<div className="wrapper"> {displayChecks(arraySizes.arraySizes, {sizes: true})} </div> }

            <div className="text-prices">FAIXA DE PREÇO</div>

            {displayChecks(arrayPrices.arrayPrices.slice(0,5), {prices: true})}

        </div>
    );
}
