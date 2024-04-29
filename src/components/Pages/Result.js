import React from 'react'
import Current from '../Current/Current'
import '../Banner/Styles.css'
import {useNavigate} from 'react-router-dom'
function Results() {
    const navigate = useNavigate()
    const clicked =()=>{
        navigate("/")
    }
    return (
        <>
            <Current />
            <div className="container back" onClick={clicked}>
                <h4>Check Another</h4>
            </div>
        </>
    )
}

export default Results
