import { FaMapMarkerAlt } from "react-icons/fa";
import "../styles/map.css";

export default function MapFloat() {

  const openMap = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=CurePhix+Pharma+Lucknow",
      "_blank"
    );
  };

  return (
    <div className="map-float" onClick={openMap}>
      <FaMapMarkerAlt />
    </div>
  );
}