import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { useState,setState } from "react";

function CartWidget(){
    const iconoStyles = { 
        'color':'white',
        'margin-top': '3vh',
        'margin-left': '1vw'
    }

    const numeroCarro = { 
        'margin-top': '3vh',
        'margin-left': '0.5vw',
        'width': '2.5vw',
     'height': '2.5vw',
     '-moz-border-radius': '50%',
     '-webkit-border-radius': '50%',
     'border-radius': '50%',
     'background': '#5cb85c'
    }
    const [carroQ, setState] = useState(1);
    return(
        
        <>
        <FontAwesomeIcon style={iconoStyles} icon={faCartShopping} />
        <span style={numeroCarro}>{carroQ}</span>
        </>
    )

}
export default CartWidget;