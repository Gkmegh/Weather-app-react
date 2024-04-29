import React ,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";
import './Styles.css'


function Search() {
    const [location, setLocation] = useState("")
    const apiKey = 'fe21c3ed35281d0904acc45ed5966fc1';
    const navigate = useNavigate();

    const clicked =()=>{
       localStorage.setItem("location",location)
       console.log(localStorage)
       axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem("location")}&appid=${apiKey}&units=metric`)
       .then((Response)=>{
         navigate("/Result");
     }).catch((error)=>{
         alert(error.message)
     })
    }
     return (
         <div className="Search">
             <div className="SearchBox">
                 <input type="text" className="search" onChange={(e)=>setLocation(e.target.value)}  name="search" id="Search" placeholder="Enter city name ......" />
                 <h2><FaSearch onClick={clicked} /></h2>
             </div>
         </div>
     )
 }
 

export default Search
