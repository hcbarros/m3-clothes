
import '../../assets/css/mobile.css';
import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import DisplayChecks from '../checkbox/display-checks';


export default function BlockCheck(props) {

    const [init, setInit] = useState(true);
    const [change, setChange] = useState(false);


    const blindEffect = () => {
        $("."+props.type+" > *").toggle( "blind" );
        setChange(!change);
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
            <div className={props.type == "wrapper" && change ? 
                "btn-sizes-less" : props.type == "wrapper" && !change ? 
                "mobile-btn-sizes" : change ? "mobile-btn-less" : 
                "mobile-btn-blind"} 
                onClick={() => blindEffect()}>{change ? "—" : "+"}</div>
        </div>    
    );
}

