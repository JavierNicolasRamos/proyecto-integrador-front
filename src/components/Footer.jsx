import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faSquareThreads, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useShowBrands } from '../hooks/index';
import "../styles/Footer.css";
import { Link } from 'react-router-dom';

export const Footer = () => {
  const showBrands = useShowBrands();// Observa cambios en la ubicación
  
  return (
    <footer className="footer">
      <div className={`footer-brand-logos ${showBrands ? '' : 'hide'}`}>
        <div className="footer-brand-logos-boxes">
          <img
            className="ibanez"
            src="https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1701464021237-Logo-ibanez.svg"
            alt="Logo-ibanez"
          />
        </div>
        <div className="footer-brand-logos-boxes">
          <img
            className="yamaha"
            src="https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1701464021600-Logo-Yamaha.svg"
            alt="Logo-Yamaha"
          />
        </div>
        <div className="footer-brand-logos-boxes">
          <img
            className="gibson"
            src="https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1701464020878-Logo-Gibson.svg"
            alt="Logo-Gibson"
          />
        </div>
        <div className="footer-brand-logos-boxes">
          <img className="esp" src="https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1701464020494-Logo-Esp.svg" alt="Logo-Esp" />
        </div>
      </div>

      <div className="footer-principal">
        <div className="footer-principal-contact-box">
          <div className="footer-principal-title">
            <p>Contacto</p>
          </div>
          <div className="footer-principal-contact-content">
            <div className="footer-principal-contact-content-text">
              <p>WhatsApp: </p>
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
            <Link to={"/aboutUs"}>Sobre nosotros</Link>
            <Link to={"/policyBlock"}>Políticas de uso</Link>
          </div>
          <div className="footer-principal-information-logo">
            <img src="https://s3.us-east-2.amazonaws.com/1023c04-grupo1/1701464019253-header-logo.svg" alt="logo" />
          </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright 2023 © | Music Rental | Design by El Olimpo</p>
      </div>
    </footer>
  );
};