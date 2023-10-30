import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Menu.css'      

const NavBar = () => {
  const [isMenuOpen, handleMenu] = useState(false);
  const handleCloseMenu = () => {
    console.log(isMenuOpen)
    handleMenu(false);
  };
  const handleStateChange = (state) => {
    handleMenu(state.isOpen);
  };
  
  return (
    <Menu 
    right 
    pageWrapId={'page-wrap'} 
    outerContainerId={'outer-container'}
    isOpen={isMenuOpen}
    onStateChange={handleStateChange} >
      <a href="/" onClick={() => handleCloseMenu() } className="menu-item">Inicio</a>
      <a href="/us" onClick={() => handleCloseMenu() } className="menu-item">Nosotros</a>
      <a href="/legal" onClick={() => handleCloseMenu() } className="menu-item">Legal</a>
      <a href="/product" onClick={() => handleCloseMenu() } className="menu-item">Productos y Servicios</a>
      <a href="/faqs" onClick={() => handleCloseMenu() } className="menu-item">FAQs</a>
      <a href="/contact" onClick={() => handleCloseMenu() } className="menu-item">Contacto</a>
      {/* <a href="http://192.168.110.2/GREENHB17/WpLOGIN.ASPX" onClick={() => handleCloseMenu() } className="menu-item">Home Banking</a> */}
    </Menu>
  );
};
export default NavBar