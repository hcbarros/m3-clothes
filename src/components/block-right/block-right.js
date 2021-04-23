
import '../../assets/css/block-right.css';
import React, { useState, useEffect, cloneElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import $ from 'jquery';
import { setCart } from '../../actions/actions';
import { order } from '../order/order';


export default function BlockRight() {

    const options = useSelector(state => state.options);
    const cart = useSelector(state => state.cart);
    const [clothes, setClothes] = useStateWithCallbackLazy([]);
    const [clothesLoaded, setClothesLoaded] = useState([]);
    const [filter, setFilter] = useState(false);
    const [sort, setSort] = useState(false);
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

        const arr = order(value, options.options);
        loadClothes(arr,true);        
    }

    const loadClothes = (array, reset) => {

       let arr = array;
       if(arr.length === 0) {
           if(reset) setClothesLoaded([]); 
           return;
       }
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

          {filter && <Redirect to="/filter" />}
          {sort && <Redirect to="/sort" />}  

          <div className="text-shirts">Blusas</div>

          <div className="buttons-mobile">
                <button onClick={() => setFilter(true)}>Filtrar</button>
                <button onClick={() => setSort(true)}>Ordenar</button>
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

                {clothesLoaded.length > 0 && clothesLoaded.map(c => 
                    <div className="clothing">
                        <img src={c.image} alt="image clothing" />
                        <div className="description">{c.description}</div>
                        <div className="price">{c.price}</div>
                        <div className="promotion">{c.promotion}</div>
                        <button onClick={() => insertItem(c)}>COMPRAR</button>
                    </div>)}

            </div>

            <button className={clothesLoaded.length > 0 ? "btn-loader" : "hide"} 
            onClick={() => loadClothes(clothes, false)}>CARREGAR MAIS</button>            


            <div className={clothesLoaded.length > 0 ? "hide" : "not-found"}>
                Sua busca não retornou nenhum resultado!</div>            

        </div>
    );
}

