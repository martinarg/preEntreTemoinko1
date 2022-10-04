import { useState } from "react";


const Brand = (props) =>{
   
   const [marcastate, setState] = useState('Trophy Deportes 1');
       
    return (
        <>
       
        <h1>{props.marca || marcastate}</h1>
        </>
    )
}
export default Brand;
