
import '../assets/css/mobile.css';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { arrayColors, arraySizes, arrayPrices } from '../components/data';
import BlockCheck from '../components/mobile/block-check';
import Header from '../components/mobile/header';
import { setChecked, setFilter } from '../actions/actions';


export default function MobileSort() {

    const [redirect, setRedirect] = useState(false);
    const reduceChecked = useSelector(state => state.reduceChecked);
    const options = useSelector(state => state.options);
    const dispatch = useDispatch();

    const setDispatch = () => {
        dispatch(setChecked([]));
        dispatch(setFilter({id: [], colors: [], prices: [], sizes: []}));
    }


    return (

        <div className="mobile-sort">

            {redirect && <Redirect to="/" />}
            
            <Header name="ORDENAR" />

            <div className="line-mobile"></div>

            <div className="mobile-body">
                
                <div className="more-recents">Mais recentes</div>
                <div className="sort-price">Menor preço</div>
                <div className="sort-price">Maior preço</div>    
                
            </div>

        </div>
    );
}

