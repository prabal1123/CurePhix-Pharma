import { FaWhatsapp } from "react-icons/fa";
import "../styles/whatsapp.css";

export default function WhatsappFloat() {

  const phoneNumber = "917408591000"; // your WhatsApp business number

  const openWhatsapp = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=Hello%20I%20would%20like%20to%20know%20about%20your%20pharmaceutical%20products`,
      "_blank"
    );
  };

  return (
    <div className="whatsapp-float" onClick={openWhatsapp}>
      <FaWhatsapp />
    </div>
  );
}
