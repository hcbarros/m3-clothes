
import '../../assets/css/index.css';
import '../../assets/css/checkbox.css';
import React, { useState, useEffect } from 'react';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import $ from 'jquery';
import DisplayChecks from '../checkbox/display-checks';
import { arrayPrices, arrayColors, arraySizes } from '../data';


export default function BlockLeft() {

    const [verCores, setVerCores] = useStateWithCallbackLazy(false);   
    const [init, setInit] = useState(true);

    const blindEffect = () => {
        setVerCores(!verCores);
        $(".line-check-blind").toggle( "blind" );
    }

    useEffect(() => {
        $(".line-check-blind").hide();
    },[init]);


    return (
  
        <div className="filters">

            <div className="text-clothers">Blusas</div>
            <div className="text-colors">CORES</div>

            <DisplayChecks array={arrayColors.slice(0,5)} obj={{colors: true}} />

            <DisplayChecks array={arrayColors.slice(5,10)} obj={{drop: true, colors: true}} />

            <div className="text-ver-cores" onClick={() => blindEffect()}>
                {verCores ? "Esconder últimas cores" : "Ver todas as cores"} 
            <div className={verCores ? "arrow-down" : "arrow-up"}></div></div>
                    
            <div className="text-sizes">TAMANHOS</div>

            <div className="wrapper"> 
                <DisplayChecks array={arraySizes} obj={{sizes: true}} />  
            </div>

            <div className="text-prices">FAIXA DE PREÇO</div>

            <DisplayChecks array={arrayPrices.slice(0,5)} obj={{prices: true}} />

        </div>
    );
}
