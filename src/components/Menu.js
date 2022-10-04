import ItemListNav from './ItemListNav';

const Menu = (props) => {
 
    return(
        <>
            {
                props.secciones.map( (sec,index) =><ItemListNav  key={index} secciones={sec}/>)
            }
        </>
      
    )
}
export default Menu;