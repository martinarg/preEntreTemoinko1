import  React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import {products} from '../mock/ProductsMocks.js';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryName } = useParams();
    console.log(categoryName);
  //use effect es bueno para dejar uestiones asincronicas ya que se ejecuta después del return  
  useEffect(()=>{
    const traerProductos = () =>{
        return new Promise((res,rej)=>{
            console.log('hola'+categoryName);
            const prodFiltrados = products.filter((prod) => prod.category === categoryName);
            const prode = categoryName? prodFiltrados : products;
            console.log(prode);
            setTimeout(()=>{
                res(prode);
            },100)

        })
    };
    //capturamos los datos 
    traerProductos()
        .then((res)=>{
            setItems(res);
        })
        .catch((error)=>{
            console.log(error);
        })
    }, [categoryName]);
    // ponemos catefgoryName para que si ocurre algun cambio en category name vuelva a ejecutarse
    return (  
        <div className='item-list-container'>
         <ItemList items={items}/>
        </div>
    
    );
};

export default ItemListContainer;