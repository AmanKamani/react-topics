import React, {useEffect, useState} from 'react'
import {NavLink, Outlet, useLocation, useSearchParams} from 'react-router-dom';
import "./style.css";
import {ProductSortBy} from "./types";

function ProductComponent() {
    const { NONE, PRICE, NAME } = ProductSortBy;
    const {pathname, search} = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchInputValue, setSearchValue] = useState("");

    useEffect(() => {
        const sortValue = searchParams.get('sort');
        const sort = searchParams.get('sort') ? { sort: sortValue! } : null

        if(searchInputValue === "")
            setSearchParams({...sort})
        else
            setSearchParams({q: searchInputValue, ...sort})
    }, [searchInputValue]);

    useEffect(() => {
        if(pathname.includes('featured') || pathname.includes('new')){
            setSearchValue("")
        }
    }, [pathname]);



    const styleProductChildTabs = (props: {isActive: boolean}) => {
        const { isActive } = props;
        return {
            backgroundColor: isActive ? 'darkCyan' : 'transparent',
            color: isActive ? 'white' : 'black'
        }
    }

    const onSortChange = (value: any) => {
        const searchValue = searchParams.get('q');
        const query = searchParams.get('q') ? { q: searchValue! } : null

        if(value !== "")
            setSearchParams({sort: value, ...query})
        else
            setSearchParams({...query})
    }

    return (<div className='container'>
        <input
            className='searchbar'
            placeholder='product name'
            type="text"
            value={searchInputValue}
            onChange={e => setSearchValue(e.target.value)}/>

        <div className='tabContainer'>
            <NavLink style={styleProductChildTabs}
                     className='childTabs'
                     to={'featured'+search}
            >Featured</NavLink>
            <NavLink style={styleProductChildTabs}
                     className='childTabs'
                     to={'new'+search}
            >New</NavLink>

            <div className='sortBy'>
                <label>Sort By:</label>
                <select onChange={e => onSortChange(e.target.value)}>
                    <option value={NONE}></option>
                    <option value={NAME}>Name</option>
                    <option value={PRICE}>Price</option>
                </select>
            </div>

        </div>
        <p style={{marginTop: 10}} />
        <Outlet />
    </div>)
}

export default ProductComponent