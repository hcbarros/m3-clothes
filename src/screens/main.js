
import './main.css';
import './block-right.css';
import React from 'react';
import { useSelector } from 'react-redux';
import BlockLeft from '../components/block-left/block-left';
import BlockRight from '../components/block-right/block-right';
import logo from '../images/logo-m3.png';
import bag from '../images/bag.png';


export default function Main() {

    const cart = useSelector(state => state.cart);

    return (

        <div className="main">
            <header >
               <img src={logo} alt="logo"/>
               <div className="block-cart">
                  <div><img src={bag} alt="bag"/></div>
                  <div className="h-cart"><a>{cart.cart.length}</a></div>
               </div>   
            </header>

            <div className="line-header"></div>

            <div className="body-clothes">

                <div className="b-left">
                  <BlockLeft />
                </div>

                <BlockRight />

            </div>


        </div>
    );
}

