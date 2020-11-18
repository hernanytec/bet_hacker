import React from 'react';
import './style.css';

const Switcher = ({ onChange, value, label }) => {

    return (
        <div className="switcher">
            <label className="switch">
                <input type="checkbox" value={value}
                    onChange={
                        (e) => onChange(e.target.checked)
                    }
                    />
                <span className="slider round"></span>
            </label>
            <span className="label">{label}</span>
        </div>
    )
}

export default Switcher;
