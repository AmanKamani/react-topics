import React from 'react'
import { useNavigate } from 'react-router-dom'

function AboutComponent() {

    const navigate = useNavigate();


    return (<>
        <h4>Learning React Router</h4>

        <button onClick={() => navigate(-1)}>Go Back</button>
    </>)
}

export default AboutComponent