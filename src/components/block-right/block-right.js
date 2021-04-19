
import './block-right.css';
import React, { useState, useEffect, cloneElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import $ from 'jquery';
import { setCart } from '../../actions/actions';


export default function BlockRight() {

    const options = useSelector(state => state.options);
    const cart = useSelector(state => state.cart);
    const [clothes, setClothes] = useStateWithCallbackLazy([]);
    const [clothesLoaded, setClothesLoaded] = useState([]);
    const dispatch = useDispatch();
    

    useEffect(() => {

       loadClothes(options.options, true);
       $(".order-option").hide();

    },[options]);


    const blindEffect = () => {
        $(".order-option").toggle( "blind" );
    }

    const insertItem = (c) => {
        let array = cart.cart;
        array.push(c);
        dispatch(setCart(array));
    }

    const orderBy = (value) => {

        let arr = [];
        switch(value) {
            case 'low':
                arr = options.options.sort(function(a,b) {
                    return a.value < b.value ? -1 : a.value > b.value ? 1 : 0;
                });
                break;
            case 'high':
                arr = options.options.sort(function(a,b) {
                    return a.value > b.value ? -1 : a.value < b.value ? 1 : 0;
                });
                break;    
            default:
                arr = options.options.sort(function(a,b) {
                    let da = new Date(a.date);
                    let db = new Date(b.date);
                    return da > db ? -1 : da < db ? 1 : 0;
                });    
        }

        loadClothes(arr,true);        
    }

    const loadClothes = (array, reset) => {

       let arr = array;
       if(arr.length === 0) return;
       let min = arr.length < 3 ? arr.length : 3; 
       let first = arr.slice(0, min); 
       let second = arr.length <= min ? [] :
                    arr.slice(min, arr.length); 
    
       let temp = reset ? first : clothesLoaded.concat(first);                    
       setClothesLoaded(temp);
       setClothes(second);
    }

    
    return (

        <div className="block-right">


          <div className="text-shirts">Blusas</div>

          <div className="buttons-mobile">
                <button>Filtrar</button>
                <button>Ordenar</button>
          </div>  


          <div className="select-option" onClick={() => blindEffect()}>  
            <div className="order" >Ordenar por:
                <div className="arrow-down-option"></div>
            </div>
            <div className="new-option order-option"
                 onClick={()=> orderBy('new')}>Mais recentes</div>
            <div className="low-price order-option"
                 onClick={()=> orderBy('low')}>Menor preço</div>
            <div className="high-price order-option"
                 onClick={()=> orderBy('high')}>Maior preço:</div>
          </div>


            <div className="wrapper-clothes">

                {clothesLoaded.map(c => 
                    <div className="clothing">
                        <img src={c.image} alt="image clothing" />
                        <div className="description">{c.description}</div>
                        <div className="price">{c.price}</div>
                        <div className="promotion">{c.promotion}</div>
                        <button onClick={() => insertItem(c)}>COMPRAR</button>
                    </div>)}

            </div>

            <button className="btn-loader" 
            onClick={() => loadClothes(clothes, false)}>CARREGAR MAIS</button>            

        </div>
    );
}

