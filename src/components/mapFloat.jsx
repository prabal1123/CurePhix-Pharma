import { FaMapMarkerAlt } from "react-icons/fa";
import "../styles/map.css";

export default function MapFloat() {

  const openMap = () => {
    window.open(
      " https://maps.app.goo.gl/vcCR8bxcKRyCeB3R6?g_st=iw",
      "_blank"
    );
  };

  return (
    <div className="map-float" onClick={openMap}>
      <FaMapMarkerAlt />
    </div>
  );
}