import React from 'react';
import logo from '../Assets/logo2.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
            <img src={logo} alt="Logo" style={{ width: '100px' }} />
            <a href="https://www.instagram.com/barbershop_seuze/" target="_blank" rel="noopener noreferrer">
            Instagram
            </a>
            <a href="https://www.facebook.com/BarbershopSeuzeoficial/" target="_blank" rel="noopener noreferrer">
                Facebook
            </a>
            <a href="/terms-of-use">Terms of Use</a>
            <a href="/privacy-policy">Privacy Policy</a>
        </div>

        <div className="footer-section">
            <a href="tel:123-456-7890" className="monospace">tel: (99)99999-9999</a>
            <a href="mailto:contact@yourbarbershop.com" className="monospace">contact@yourbarbershop.com</a>
        </div>
      </div>
      
      <div className="footer-copyright">
        Copyright &copy; Your Barbershop {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;