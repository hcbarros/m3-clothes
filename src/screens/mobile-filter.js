
import '../assets/css/main.css';
import React from 'react';
import { useSelector } from 'react-redux';
import BlockLeft from '../components/block-left/block-left';


export default function MobileFilter() {


    return (

        <div className="main">
            <header >
               <div>FILTRAR</div>
               <div>+</div>
            </header>

            <div className="line-header"></div>

            <div className="body-clothes">

                
                  <BlockLeft />
            
            </div>


        </div>
    );
}

