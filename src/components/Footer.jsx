import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-brand-logos">
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
              <p>Wapp: </p>
              <p className="colored-text">11 4576 - 8765</p>
            </div>
            <div className="footer-principal-contact-content-text">
              <p>Mail:</p>
              <p className="colored-text">contacto@musicrental.com.ar</p>
            </div>
          </div>
          <div className="footer-principal-contact-socialnetworklogos"></div>
        </div>
        <div className="footer-principal-information">
          <div className="footer-principal-information-content">
            <p>Información</p>
            <a href="">Requisitos para alquilar</a>
            <a href="">Forma de pago</a>
            <a href="">Blog</a>
          </div>
          <div className="footer-principal-information-logo">
            <img src="src/images/header-logo.svg" alt="logo" />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <p>Copyright 2023 © | Music Rental | Design by El Olimpo</p>
      </div>
    </footer>
  );
};

export default Footer;
