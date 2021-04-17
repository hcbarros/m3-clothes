
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
     const [btnActive, setBtnActive] = useStateWithCallbackLazy([]);


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


      const checkBox = (evt) => {
          alert(evt.target.checked)
      }


    const checkColors = (array, bool) => {

        return array.map(check => 
            <div className={bool ? "line-check check-drop" : "line-check"}>
                <label class="container-check">
                    <input type="checkbox" onClick={(evt) => checkBox(evt)} />
                    <span class="checkmark"></span>
                </label>    <div>{check}</div>
            </div>)  
    }  


    const btnAction = (evt, text, index) => {

        evt.target.disabled = true;
       
        let array = btnActive;
        array[index] = !array[index];
        setBtnActive(array, () => {});
                    

        evt.target.disabled = false;

        evt.target.focus = false;
        // let array = btnArray;
        // const enable = btnArray.indexOf(text) >= 0;
        // if(!enable) array.push(text);
        // else array = array.filter(t => t !== text);
        // setBtnArray(array);
    }

    useEffect(() => {
        if(btnActive.length === 0) {
            let array = [];
            ['','','','','','','','','','',''].map(x => array.push(false));
            setBtnActive(array, () => {});
        }
    },[]);


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
                    
                    {checkColors(['Amarelo','Azul','Branco','Cinza','Laranja'], false)}

                    {verCores && checkColors(['Verde','Vermelho','Preto','Rosa','Vinho'], true)}

                    <div className="text-ver-cores" onClick={() => setVerCores(!verCores)}>
                        {verCores ? "Esconder últimas cores" : "Ver todas as cores"} 
                    <div className={verCores ? "arrow-down" : "arrow-up"}></div></div>
                    

                    <div className="text-tamanhos">TAMANHOS</div>

                    {btnActive.length > 0 && <div className="wrapper">
                        {['P','M','G','GG','U','36','38','40','42','44','46'].map((text, index) => 
                        <button className={btnActive[index] ? "btn-active" : "btn-inative"} 
                        onClick={(evt) => btnAction(evt, text, index)} >{text}
                        </button>)}</div> }



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