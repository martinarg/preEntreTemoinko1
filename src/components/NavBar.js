import { Component } from 'react';
import CartWidget from './CartWidget';
import Brand from './Brand';
import Menu from './Menu';

 
export default class NavBar extends Component{
    secciones = ["Catalogo","Calzado","Indumentaria","Accesorios"];

    
    constructor(){
        super();
        this.state ={title:"Trophy Deportes", opciones: this.opciones}
    }
    cambiarState(){
        this.setState = {title:"Trophy Deportes"}
    }
    
    render(){
        return(
       <>
        <Brand marca={this.state.title}/>
        <Menu secciones={this.secciones}/>
        <CartWidget/>
      
        </>
    
       
        )
    }
}
