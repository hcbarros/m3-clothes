
import '../../assets/css/mobile.css';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';


export default function Header(props) {

    const [redirect, setRedirect] = useState(false);

    return (

        <div className="mobile-header">
            
            {redirect && <Redirect to="/" />}
            
            <div>{props.name}</div>
            <div onClick={() => setRedirect(true)}>+</div>
        </div>
    );
}

