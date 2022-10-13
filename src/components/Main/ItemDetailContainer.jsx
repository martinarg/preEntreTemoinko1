import  React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import {products} from '../mock/ProductsMocks.js';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

        const [item, setItem] = useState({});
        const {id} = useParams();
      //use effect es bueno para dejar uestiones asincronicas ya que se ejecuta después del return  
      useEffect(()=>{
        const traerProducto = () =>{
            
            return new Promise((res,rej)=>{
                const product = products.find((product)=>product.id=== Number(id));
                setTimeout(()=>{
                    res(product);
                    
                },200)
    
            })
        }
        //capturamos los datos 
        traerProducto()
            .then((res)=>{
                setItem(res);
            })
            .catch((error)=>{
                console.log(error);
            })
        }, []);
   
    return (  
        <div className='item-detail-container'>
            <ItemDetail item={item}/>
        </div>
    
    );
};

export default ItemDetailContainer;