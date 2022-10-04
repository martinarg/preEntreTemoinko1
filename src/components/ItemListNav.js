

const ItemListNav = (props) =>{
    const menu={
        'text-decoration':'none',
        'color':'white',
        'margin-top':'2vh'
       }
    return(
        <ul>
            <li><a style={menu} href="">{props.secciones}</a></li>
        </ul>
    )
}
export default ItemListNav;