
import '../../assets/css/mobile.css';
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import DisplayChecks from '../checkbox/display-checks';


export default function BlockCheck(props) {

    const [init, setInit] = useState(true);


    const blindEffect = () => {
        $("."+props.type+" > *").toggle( "blind" );
    }

    useEffect(() => {
        $("."+props.type+" > *").hide();
    },[init]);

    return (
        
        <div className="mobile-block-checks">
            <div className="mobile-checks">
                <div className={props.type == "wrapper" ? "mobile-sizes" : ""}>
                     {props.type == "color" ? "CORES" : 
                      props.type == "wrapper" ? "TAMANHOS" : "FAIXA DE PREÇO"}
                </div>
                <div className={"mobile-display "+props.type}>
                    <DisplayChecks array={props.array} 
                                   obj={props.obj} />  
                </div>
            </div>
            <div className={props.type == "wrapper" ? 
                "mobile-btn-sizes" : "mobile-btn-blind"} 
                onClick={() => blindEffect()}>+</div>
        </div>    
    );
}

