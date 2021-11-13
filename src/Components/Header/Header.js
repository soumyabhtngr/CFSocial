import React from "react";
import './Header.css';

export const Header = () => {

    const HeaderItems = ["Profile", "Trends"];

    return (
        <div className="header">
            <div className="h-primary-section">
                <h2 className="logo">CFSocial</h2>
                {HeaderItems.map((item, index) => (
                    <h3 className="header-item" key={index}>{item}</h3>
                ))}
            </div>
            <div className="h-secondary-section">
                <div className="circle">SB</div>
            </div>
        </div>
    );
};
