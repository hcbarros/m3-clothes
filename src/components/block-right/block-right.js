
import './block-right.css';
import React, { useState, useEffect, cloneElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import $ from 'jquery';
import { setCart, setFilter } from '../../actions/actions';


export default function BlockRight() {

    const filter = useSelector(state => state.filter);
    const [clothes, setClothes] = useStateWithCallbackLazy([]);
    const [clothesLoaded, setClothesLoaded] = useState([]);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {

       loadClothing(true);
       $(".order-option").hide();

    },[filter]);


    const blindEffect = () => {
        // setVerCores(!verCores);
        $(".order-option").toggle( "blind" );
    }

    const loadClothing = (changed) => {

       let arr = changed ? filter.filter : clothes;
       if(arr.length === 0) return;
       let min = arr.length < 3 ? arr.length : 3; 
       let first = arr.slice(0, min); 
       let second = arr.length <= min ? [] :
                    arr.slice(min, arr.length); 

       setClothesLoaded(clothesLoaded.concat(first));
       setClothes(second);
    }

    
    return (

        <div className="block-right">

          <div className="select-option" onClick={() => blindEffect()}>  
            <div className="order" >Ordenar por:
                <div className="arrow-down-option"></div>
            </div>
            <div className="new-option order-option">Mais recentes</div>
            <div className="low-price order-option">Menor preço</div>
            <div className="high-price order-option">Maior preço:</div>
          </div>


            <div className="wrapper-clothes">

                {clothesLoaded.map(c => 
                    <div className="clothing">
                        <img src={c.image} alt="image clothing" />
                        <div className="description">{c.description}</div>
                        <div className="price">{c.price}</div>
                        <div className="promotion">{c.promotion}</div>
                        <button>COMPRAR</button>
                    </div>)}

            </div>

            <button className="btn-loader" 
            onClick={() => loadClothing(false)}>CARREGAR MAIS</button>            

        </div>
    );
}

