import React, { useState, useContext } from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Menu.css'     
import {useTranslation} from 'react-i18next'; 
import {LanguageContext} from '../../LanguageContext'

const NavBar = () => {
  const [isMenuOpen, handleMenu] = useState(false);
  const handleCloseMenu = () => {
    console.log(isMenuOpen)
    handleMenu(false);
  };
  const handleStateChange = (state) => {
    handleMenu(state.isOpen);
  };

  const {t} = useTranslation();

  const { language, toggleLanguage } = useContext(LanguageContext);
  
  return (
    <Menu 
    right 
    pageWrapId={'page-wrap'} 
    outerContainerId={'outer-container'}
    isOpen={isMenuOpen}
    onStateChange={handleStateChange} >
      <a href="/" onClick={() => handleCloseMenu() } className="menu-item">{t('menu.home')}</a>
      <a href="/us" onClick={() => handleCloseMenu() } className="menu-item">{t('menu.us')}</a>
      <a href="/legal" onClick={() => handleCloseMenu() } className="menu-item">{t('menu.legal')}</a>
      <a href="/product" onClick={() => handleCloseMenu() } className="menu-item">{t('menu.products')}</a>
      <a href="/faqs" onClick={() => handleCloseMenu() } className="menu-item">{t('menu.faqs')}</a>
      <a href="/contact" onClick={() => handleCloseMenu() } className="menu-item">{t('menu.contact')}</a>
      <a href="http://app.greencapital.com.py/greenhb17/wplogin.aspx" onClick={() => handleCloseMenu() } className="menu-item">{t('menu.client-area')}</a>
      <button className="lang-btn-menu" onClick={toggleLanguage}>{language === 'es' ? 'English' : 'Español'}</button>
  
    </Menu>
  );
};
export default NavBar