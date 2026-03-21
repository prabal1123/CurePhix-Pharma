// import "../styles/navbar.css";

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="nav-container">

//         <div className="logo">
//           <img
//             src="https://xzpyaylnaakhtfqshhmv.supabase.co/storage/v1/object/public/Work/IMG_1207.jpg"
//             alt="CurePhix Pharma"
//             className="logo-img"
//           />
//         </div>

//         <ul className="nav-links">
//             <li><a href="#home">Home</a></li>
//             <li><a href="#about">About Us</a></li>
//             <li><a href="#products">Products</a></li>
//             <li><a href="#contact">Contact</a></li>
//         </ul>

//         <a href="#contact" className="contact-btn">
//   Get In Touch
// </a>

//       </div>
//     </nav>
//   );
// }
import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

        {/* ✅ Hamburger added */}
        <div 
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* ✅ Just added toggle class */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About Us</a></li>
          <li><a href="#products" onClick={() => setMenuOpen(false)}>Products</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        {/* ✅ Hide on mobile via CSS */}
        <a href="#contact" className="contact-btn desktop-btn">
          Get In Touch
        </a>

      </div>
    </nav>
  );
}