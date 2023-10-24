import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-brand-logos">
        <div className="footer-brand-logos-boxes">
          <img className="ibanez" src="/src/images/Logo-ibanez.svg" alt="Logo-ibanez" />
        </div>
        <div className="footer-brand-logos-boxes">
          <img className="yamaha" src="/src/images/Logo-Yamaha.svg" alt="Logo-Yamaha" />
        </div>
        <div className="footer-brand-logos-boxes">
          <img className="gibson" src="/src/images/Logo-Gibson.svg" alt="Logo-Gibson" />
        </div>
        <div className="footer-brand-logos-boxes">
          <img className="esp" src="/src/images/Logo-Esp.svg" alt="Logo-Esp" />
        </div>
      </div>
      <div className="footer-contact">
        <img src="/src/images/ico-facebook.png" alt="ico-facebook" />
        <img src="/src/images/ico-instagram.png" alt="ico-instagram" />
        <img src="/src/images/ico-tiktok.png" alt="ico-tiktok" />
        <img src="/src/images/ico-whatsapp.png" alt="ico-whatsapp" />
      </div>
      <div className="footer-copyright">
        <p>Copyright 2023 © | Music Rental | Design by El Olimpo</p>
      </div>
    </footer>
  );
};

export default Footer;
