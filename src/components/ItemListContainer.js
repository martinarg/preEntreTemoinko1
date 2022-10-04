import { useEffect, useState } from "react";


const ItemListContainer = ({greeting})=>{
  
    const styles = {"color":"red"}
    return(
        <h1 style={styles}>{greeting}</h1>
        
    )
}

export default ItemListContainer;