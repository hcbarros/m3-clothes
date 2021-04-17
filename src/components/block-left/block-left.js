
import '../index.css';
import './dropdown.css';
import './checkbox.css';
import React, { useState } from 'react';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import { arrayColors, arraySizes, arrayPrices, 
         arrayChecked } from '../data';


export default function BloclLeft() {

    const [verCores, setVerCores] = useState(false);   
    const [btnArray, setBtnArray] = useState([]);
    const [gridChecked, setGridChecked] = useStateWithCallbackLazy(arrayChecked);


    const checkAction = (evt) => {
  
        const index = JSON.parse(evt.target.value);
        const obj = JSON.parse(evt.target.name);

        if(obj.colors) {

        }

        else if(obj.sizes) {
            let array = gridChecked;
                
            array[index] = evt.target.checked;
            setGridChecked(array, () => {});

        }

        else {

        }

        setBtnArray([], () => {});

    }

    const displayChecks = (array, obj) => {

        return array.map((text, index) => 
            <div className={obj.drop ? "line-check check-drop" : "line-check"}>
                <label class={obj.sizes ? "container-check-grid" : "container-check"}>                        
                    <input type="checkbox" name={JSON.stringify(obj)} 
                        value={index} onClick={(evt) => checkAction(evt)} 
                    />
                    <span class={!obj.sizes ? "checkmark" : gridChecked[index] ?  
                    "checkmark-grid-active" : "checkmark-grid"}>
                        {obj.sizes && text}
                    </span>
                </label>    {!obj.sizes && <div>{text}</div>}
            </div>
        );  
    }  


    return (
  
        <div className="filters">

            <div className="text-clothers">Blusas</div>
            <div className="text-colors">CORES</div>
                    
            {displayChecks(arrayColors.slice(0,5), {colors: true})}

            {verCores && displayChecks(arrayColors.slice(5,10), {drop: true, colors: true})}

            <div className="text-ver-cores" onClick={() => setVerCores(!verCores)}>
                {verCores ? "Esconder últimas cores" : "Ver todas as cores"} 
            <div className={verCores ? "arrow-down" : "arrow-up"}></div></div>
                    
            <div className="text-sizes">TAMANHOS</div>

            {<div className="wrapper"> {displayChecks(arraySizes, {sizes: true})} </div> }

            <div className="text-prices">FAIXA DE PREÇO</div>

            {displayChecks(arrayPrices.slice(0,5), {prices: true})}

        </div>
    );
}
