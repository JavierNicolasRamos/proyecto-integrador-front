import "../styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faSquareThreads, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


export const Footer = () => {

  const location = useLocation(); // Obtén la ubicación actual
  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";

  const [showBrands, setShowBrands] = useState(true);

  useEffect(() => {
    if (isLogin || isRegister) {
      setShowBrands(false);
    } else {
      setShowBrands(true);
    }
  }, [location.pathname]); // Observa cambios en la ubicación
  
  return (
    <footer className="footer">
      <div className={`footer-brand-logos ${showBrands ? '' : 'hide'}`}>
        <div className="footer-brand-logos-boxes">
          <img
            className="ibanez"
            src="/src/images/Logo-ibanez.svg"
            alt="Logo-ibanez"
          />
        </div>
        <div className="footer-brand-logos-boxes">
          <img
            className="yamaha"
            src="/src/images/Logo-Yamaha.svg"
            alt="Logo-Yamaha"
          />
        </div>
        <div className="footer-brand-logos-boxes">
          <img
            className="gibson"
            src="/src/images/Logo-Gibson.svg"
            alt="Logo-Gibson"
          />
        </div>
        <div className="footer-brand-logos-boxes">
          <img className="esp" src="/src/images/Logo-Esp.svg" alt="Logo-Esp" />
        </div>
      </div>

      <div className="footer-principal">
        <div className="footer-principal-contact-box">
          <div className="footer-principal-title">
            <p>Contacto</p>
          </div>
          <div className="footer-principal-contact-content">
            <div className="footer-principal-contact-content-text">
              <p>Whatsapp: </p>
              <p className="colored-text">11-4576-8765</p>
            </div>
            <div className="footer-principal-contact-content-text">
              <p>Mail:</p>
              <p className="colored-text">contacto@musicrental.com.ar</p>
            </div>
          </div>
          <div className="footer-principal-contact-socialnetworklogos">
            <a href="https://www.facebook.com/"><FontAwesomeIcon className="fontAwesomeIcons" icon={faFacebookSquare} /></a>
            <a href="https://www.threads.net/"><FontAwesomeIcon className="fontAwesomeIcons" icon={faSquareThreads} /></a>
            <a href="https://twitter.com/"><FontAwesomeIcon className="fontAwesomeIcons" icon={faXTwitter} /></a>
            <a href=""><FontAwesomeIcon className="fontAwesomeIcons whatsapp" icon={faWhatsapp} /></a>
            <a href=""><FontAwesomeIcon className="fontAwesomeIcons mail" icon={faEnvelope} /></a>
          </div>
        </div>
          <div className="footer-principal-information-content">
            <p>Información</p>
            <a href="">Requisitos para alquilar</a>
            <a href="">Forma de pago</a>
            <a href="">Blog</a>
          </div>
          <div className="footer-principal-information-logo">
            <img src="/src/images/header-logo.svg" alt="logo" />
          </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright 2023 © | Music Rental | Design by El Olimpo</p>
      </div>
    </footer>
  );
};