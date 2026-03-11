import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">
          <div className="logo-icon">💊</div>
          <span className="logo-text">
            Cure<span className="highlight">Phix</span> Pharma
          </span>
        </div>

        <ul className="nav-links">
          <li className="active">Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>

        <button className="contact-btn">Get In Touch</button>

      </div>
    </nav>
  );
}