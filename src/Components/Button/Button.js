import React from "react";
import { Loader } from './../Loader';
import './Button.css';

export const Button = ({ children, onClick, isLoading, className }) => {
    const cssClass = className ? `${className}` : '';
    return (
        <button onClick={onClick} className={`btn ${cssClass}`}>
            {isLoading ? <Loader /> : children}
        </button>
    );
};
