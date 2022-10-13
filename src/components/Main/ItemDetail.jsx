
import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) =>{

    return(
        <div className='item-detail'>
            <img src={item.img}/>
            <div>
                <h2>{item.title}</h2>
                <ItemCount stock={10} initial={1}/>
            </div>
           

           
        </div>
    )
}

export default ItemDetail;