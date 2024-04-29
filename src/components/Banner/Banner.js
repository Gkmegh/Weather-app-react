import React from 'react'
import './Styles.css'
function Banner() {
    return (
        <>
            <div className="container text-center Banner">
                <h3>Welcome</h3>
               <h1 className="display-1">Wheather App</h1>
               <h4>Made with <a href="https://reactjs.org/">React</a></h4>
            </div>
        </>
    )
}

export default Banner
