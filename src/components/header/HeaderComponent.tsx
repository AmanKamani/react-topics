import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css';

function HeaderComponent() {

    const styleNavLink = (props: {isActive: boolean}) => {
        const { isActive } = props;
        return {
            color: isActive ? "white" : "black",
            backgroundColor: isActive ? "orangeRed" : "transparent",
            fontWeight: 600,
            padding: "10px",
            textDecoration: "none",
            display: "inline-block"
        }
    }

    return (<div className='header'>
        {
            // NavLink automatically adds `active` class to the selected
            // Link doesn't add `active` class to the selected
        }
        <NavLink style={styleNavLink} to="/">Home</NavLink>
        <NavLink style={styleNavLink} to="/about">About</NavLink>
    </div>)
}

export default HeaderComponent