
import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) =>{

    return(
        <div className='item-detail'>
            <img src={item.img}/>
            <div className='item-detail-info'>
                <h2>{item.title}</h2>
                <p className='item-desc'>{item.desc}</p>
                <ItemCount stock={item.stock} initial={1}/>
            </div>
           

           
        </div>
    )
}

export default ItemDetail;