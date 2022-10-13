import { useState } from "react";
import { Link } from "react-router-dom";


const Brand = (props) =>{
   
   //const [marcastate, setState] = useState('Trophy Deportes 1');
       
    return (
        <>
        <Link to={'/'}><h1>{props.marca}</h1></Link>
        </>
    )
}
export default Brand;
