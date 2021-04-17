
import './index.css';
import './dropdown.css';
import './checkbox.css';
import React, { useState, useEffect } from 'react';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import $ from 'jquery';
import logo from '../images/logo-m3.png';
import bag from '../images/bag.png';


export default function Main() {

     const [verCores, setVerCores] = useState(false);   
     const [btnArray, setBtnArray] = useState([]);
     const [gridDisabled, setGridDisabled] = useStateWithCallbackLazy([]);


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


    const checkAction = (evt, grid, text, index) => {

        const disabled = evt.target.disabled;
        evt.target.disabled = true;  
        if(grid) {
            let array = gridDisabled;
            if(array.length === 0) {
                ['','','','','','','','','','','',]
                .map(x => array.push(true));
                setGridDisabled(array, () => {});
            }    
            array[index] = disabled;
            setGridDisabled(array, () => {});
        }

        setBtnArray([], () => {});

        evt.target.disabled = false;  
    }


    const displayChecks = (array, drop, grid) => {

        return array.map((text, index) => 
            <div className={drop ? "line-check check-drop" : "line-check"}>
                <label class={grid ? "container-check-grid" : "container-check"}>
                    <input type="checkbox" 
                    onClick={(evt) => checkAction(evt, grid, text, index)} />
                    <span class={!grid ? "checkmark" : gridDisabled[index] ?  
                    "checkmark-grid" : "checkmark-grid-active"}>
                        {grid && text}
                    </span>
                </label>    {!grid && <div>{text}</div>}
            </div>)  
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
                    <div className="text-filter">CORES</div>
                    
                    {displayChecks(['Amarelo','Azul','Branco','Cinza','Laranja'], false, false)}

                    {verCores && displayChecks(['Verde','Vermelho','Preto','Rosa','Vinho'], true, false)}

                    <div className="text-ver-cores" onClick={() => setVerCores(!verCores)}>
                        {verCores ? "Esconder últimas cores" : "Ver todas as cores"} 
                    <div className={verCores ? "arrow-down" : "arrow-up"}></div></div>
                    

                    <div className="text-tamanhos">TAMANHOS</div>

                    {<div className="wrapper">
                        {displayChecks(['P','M','G','GG','U','36','38','40','42','44','46'], 
                            false, true)}                        
                    </div> }



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