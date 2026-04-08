import "../styles/footer.css";

export default function Footer() {

  const whatsappNumber = "7408591000"; // replace with your number

  const openWhatsapp = () => {
    window.open(`https://wa.me/${whatsappNumber}`, "_blank");
  };

  return (
    <footer id="contact">

      {/* Contact Banner */}

      <div className="contact-banner">

        <div className="contact-left">
          <h2>Get In Touch With Us</h2>

          <div className="contact-info">
            <span>📞 +91 740 859 1000</span>
            <span>✉ curephix@gmail.com</span>
          </div>
        </div>

        <button className="contact-btn" onClick={openWhatsapp}>
          Contact Us
        </button>

      </div>

      {/* Footer Section */}

      <div className="footer-main">

        <div className="footer-col brand">

          <h3>CurePhix Pharma</h3>

          <p>
            Committed to quality, innovation, and ethical healthcare.
            Delivering trusted pharmaceutical solutions across India.
          </p>

        </div>


       


        <div className="footer-col">

          <h4>Contact Info</h4>

          <p>Flat no. 810, 8th floor, Royal Plaza</p>
          <p>Golf City, Sector B Ansal API, Lucknow, Uttar Pradesh, Pin - 226030</p>
          <p>curephix@gmail.com</p>
          <p>+91 7408591000</p>

        </div>


        <div className="footer-col">

          <h4>Online</h4>

          <p>www.curephix.in</p>

          <p>
            CurePhix Pharma is a pharmaceutical company focused on
            manufacturing and distributing quality healthcare products.
          </p>

        </div>

      </div>


      <div className="footer-bottom">
        © 2026 CurePhix Pharma. All Rights Reserved.
      </div>

    </footer>
  );
}