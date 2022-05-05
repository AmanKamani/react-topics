import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomeComponent() {

    const navigate = useNavigate();

    const navigateToAboutUs = () => {
        navigate('/about');
        // navigate('/about', { replace: true })
        // this will replace the URL instead of pushing in a stack.
    }

    return (<>
        <p>Hi</p>
        <button onClick={navigateToAboutUs}>Click to know more About US</button>
    </>)
}

export default HomeComponent