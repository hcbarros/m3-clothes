
import '../assets/css/mobile.css';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { arrayColors, arraySizes, arrayPrices } from '../components/data';
import BlockCheck from '../components/mobile/block-check';
import Header from '../components/mobile/header';
import { setChecked, setFilter, setOptions } from '../actions/actions';
import { order } from '../components/order/order';


export default function MobileSort() {

    const [redirect, setRedirect] = useState(false);
    const options = useSelector(state => state.options);
    const dispatch = useDispatch();

    const orderBy = (value) => {

        const arr = order(value, options.options);
        dispatch(setOptions(arr));
        setRedirect(true);
    }


    return (

        <div className="mobile-sort">

            {redirect && <Redirect to="/" />}
            
            <Header name="ORDENAR" />

            <div className="line-mobile"></div>

            <div className="mobile-body">
                
                <div className="more-recents" 
                onClick={()=> orderBy('new')}>Mais recentes</div>
                
                <div className="sort-price" 
                onClick={()=> orderBy('low')}>Menor preço</div>
                
                <div className="sort-price" 
                onClick={()=> orderBy('high')}>Maior preço</div>    
                
            </div>

        </div>
    );
}

