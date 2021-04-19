
import './main.css';
import './block-right.css';

import React from 'react';
import $ from 'jquery';
import BlockLeft from '../components/block-left/block-left';
import BlockRight from '../components/block-right/block-right';
import { arrayClothes } from '../components/data';
import logo from '../images/logo-m3.png';
import bag from '../images/bag.png';


export default function Main() {


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


    return (

        <div className="main">
            <header >
               <img src={logo} alt="logo"/>
               <img src={bag} alt="bag"/>
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