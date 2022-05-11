import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import "./style.css";

function ProductComponent() {

    const styleProductChildTabs = (props: {isActive: boolean}) => {
        const { isActive } = props;
        return {
            backgroundColor: isActive ? 'darkCyan' : 'transparent',
            color: isActive ? 'white' : 'black'
        }
    }

    return (<div className='container'>
        <input className='searchbar' placeholder='product name' type="text" />

        <div className='tabContainer'>
            <NavLink style={styleProductChildTabs} className='childTabs' to='featured'>Featured</NavLink>
            <NavLink style={styleProductChildTabs} className='childTabs' to='new'>New</NavLink>
        </div>
        <p style={{marginTop: 10}} />
        <Outlet />
    </div>)
}

export default ProductComponent