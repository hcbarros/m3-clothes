
import '../assets/css/mobile.css';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { arrayColors, arraySizes, arrayPrices, arrayClothes } from '../data/data';
import BlockCheck from '../components/mobile/block-check';
import Header from '../components/mobile/header';
import { setChecked, setFilter, setOptions } from '../actions/actions';


export default function MobileFilter() {

    const [redirect, setRedirect] = useState(false);
    const reduceChecked = useSelector(state => state.reduceChecked);
    const options = useSelector(state => state.options);
    const dispatch = useDispatch();

    const clear = () => {
        dispatch(setChecked([]));
        dispatch(setFilter({id: [], colors: [], prices: [], sizes: []}));
        dispatch(setOptions(arrayClothes));
    }


    return (

        <div className="mobile-filter">

            {redirect && <Redirect to="/" />}
            
            <Header name="FILTRAR" />

            <div className="line-mobile"></div>

            <div className="mobile-body">
                
                <BlockCheck array={arrayColors.slice(0,10)} 
                            obj={{colors: true}} type="color" />

                <BlockCheck array={arraySizes} obj={{sizes: true}} 
                            type="wrapper" />

                <BlockCheck array={arrayPrices.slice(0,5)} 
                            obj={{prices: true}} type="price" />

            </div>

            <div className="mobile-buttons">
                <button className="btn-aplicar" 
                onClick={() => setRedirect(true)}>APLICAR</button>
                
                <button className="btn-limpar" 
                onClick={() => clear()}>LIMPAR</button>
            </div>

        </div>
    );
}

