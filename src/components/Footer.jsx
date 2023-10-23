import "../styles/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <p>©2023 Digital Booking</p>
      </div>
      <div className="footer-icons">
        <img src="/src/images/ico-facebook.png" alt="ico-facebook" />
        <img src="/src/images/ico-instagram.png" alt="ico-instagram" />
        <img src="/src/images/ico-tiktok.png" alt="ico-tiktok" />
        <img src="/src/images/ico-whatsapp.png" alt="ico-whatsapp" />
      </div>
    </footer>
  );
}

export default Footer