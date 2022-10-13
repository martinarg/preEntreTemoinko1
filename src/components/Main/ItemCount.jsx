import { counter } from '@fortawesome/fontawesome-svg-core';
import React, {useState} from 'react'

const ItemCount = (props) =>{
    const [count, setCounter] = useState(props.initial);
    const sumar =() =>{
       count < props.stock && setCounter(count+1);     
    };
     const restar =() =>{
        count > props.initial && setCounter(count-1)
      
    }
    return(
        <div className='container-count'>
            <div className='count-btn'>
                <button onClick={sumar}>+</button>
                <p>{count}</p>
                <button onClick={restar}>-</button>
            </div>
            <button className='add-btn'>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;