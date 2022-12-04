import React from 'react'
import Logo from './Assets/barber-shop-seuze.jpg'
import Menu from './Menu'


function Header(props){
    return(
        <div className="header">
            <img id="logo-img" src={Logo} alt="logo"/>
            <Menu links={props.links}></Menu>
        </div>
    );
}
 
export default Header;