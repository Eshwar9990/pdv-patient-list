import React from 'react';
import Spinner from "../../assets/loader.gif";

// Loader icon for managing the time lag after API hit request
export const Loader = () => {
    return (
        <center>
            <img src={Spinner} alt="Loader_Icon" height="600" />
        </center>
    );
};