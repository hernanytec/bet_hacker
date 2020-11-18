import React from 'react';
import './style.css'

const NavExpanded = ({ children }) => {
    return (
        <div className="nav-expanded">
            <div className="content">
                <span className="title">BET HACKER</span>
                <div className="wrapper">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default NavExpanded;
