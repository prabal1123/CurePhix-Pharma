import "../styles/navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <div className="logo">
          <img
            src="https://xzpyaylnaakhtfqshhmv.supabase.co/storage/v1/object/public/Work/IMG_1207.jpg"
            alt="CurePhix Pharma"
            className="logo-img"
          />
        </div>

        <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="#contact" className="contact-btn">
  Get In Touch
</a>

      </div>
    </nav>
  );
}