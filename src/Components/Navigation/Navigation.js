import React from "react";
import './Navigation.css';
import Home from '../../Assets/Icons/home.svg';
import All from '../../Assets/Icons/all.svg';
import Shared from '../../Assets/Icons/shared.svg';

export const Navigation = () => {
    return (
        <div className="navigation-container">
            <div><img src={Home} alt="home" /><h3>Home</h3></div> 
            <div><img src={All} alt="all-post" /><h3>All your posts</h3></div> 
            <div><img src={Shared} alt="shared" /><h3>Shared with you</h3></div> 
        </div>
    );
};
