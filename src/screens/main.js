
import './index.css';
import './dropdown.css';
import './checkbox.css';
import React, { useState, useEffect } from 'react';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import $ from 'jquery';
import { arrayColors, arraySizes, arrayPrices, 
         arrayChecked } from '../components/data';
import logo from '../images/logo-m3.png';
import bag from '../images/bag.png';


export default function Main() {

     const [verCores, setVerCores] = useState(false);   
     const [btnArray, setBtnArray] = useState([]);
     const [gridChecked, setGridChecked] = useStateWithCallbackLazy(arrayChecked);



    $('.js-dropp-action').on("click", function(e) {
        e.preventDefault();
        $(this).toggleClass('js-open');
        $(this).parent().next('.dropp-body').toggleClass('js-open');
      });
    
      // Using as fake input select dropdown
      $('label').on("click", function() {
        $(this).addClass('js-open').siblings().removeClass('js-open');
        $('.dropp-body,.js-dropp-action').removeClass('js-open');
      });
      // get the value of checked input radio and display as dropp title
      $('input[name="dropp"]').on("change", function() {
        var value = $("input[name='dropp']:checked").val();
        $('.js-value').text(value);
      });


    const checkAction = (evt) => {
  
        const obj = JSON.parse(evt.target.value);

        if(obj.sizes) {
            let array = gridChecked;
                
            array[obj.index] = evt.target.checked;
            setGridChecked(array, () => {});

        }
        
        setBtnArray([], () => {});

    }


    const displayChecks = (array, obj) => {

        return array.map((text, index) => {
            
            obj.index = index;
            obj.text = text;
            return <div className={obj.drop ? "line-check check-drop" : "line-check"}>
                        <label class={obj.sizes ? "container-check-grid" : "container-check"}>                        
                            <input type="checkbox" value={JSON.stringify(obj)}
                            onClick={(evt) => checkAction(evt)} />
                            <span class={!obj.sizes ? "checkmark" : gridChecked[index] ?  
                            "checkmark-grid-active" : "checkmark-grid"}>
                                {obj.sizes && text}
                            </span>
                        </label>    {!obj.sizes && <div>{text}</div>}
                    </div>
        });  
    }  


    return (

        <div className="main">
            <header >
               <img src={logo} alt="logo"/>
               <img src={bag} alt="bag"/>
            </header>

            <div className="line-header"></div>

            <div className="body-clothers">
            
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

                <div className="clothers">

                    

                </div>

            </div>


        </div>
    );
}



                    // <div class="dropp">
                    //     <div class="dropp-header">
                    //         <span class="dropp-header__title js-value">Choose an option</span> 
                    //         <a href="#" class="dropp-header__btn js-dropp-action">
                    //         <i class="icon"></i>
                    //         </a> 
                    //     </div>
                    //     <div class="dropp-body">
                    //         <label for="optA">Option A
                    //         <input type="radio" id="optA" name="dropp" value="Option A" />
                    //         </label>
                    //         <label for="optB">Option B
                    //         <input type="radio" id="optB" name="dropp" value="Option B" />
                    //         </label>
                    //         <label for="optC">Option C
                    //         <input type="radio" id="optC" name="dropp" value="Option C" />
                    //         </label>
                    //         <label for="optD">Option D
                    //         <input type="radio" id="optD" name="dropp" value="Option D" />
                    //         </label>
                    //     </div>
                    // </div>