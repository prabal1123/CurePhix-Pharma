
import { useState, useEffect } from "react";
import "../styles/hero.css";

const heroImages = [
  "https://xzpyaylnaakhtfqshhmv.supabase.co/storage/v1/object/public/Work/tempImageWiPlfu.jpeg",
  "https://xzpyaylnaakhtfqshhmv.supabase.co/storage/v1/object/public/Work/tempImageUKOkLf%20(1).jpeg",
  "https://xzpyaylnaakhtfqshhmv.supabase.co/storage/v1/object/public/Work/ChatGPTImageMar222026at12_30_47A.jpeg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
     id="home"
      className="hero"
      style={{ backgroundImage: `url(${heroImages[index]})` }}
    >
      <div className="hero-overlay">
        <span className="hero-tag">TRUSTED PHARMACEUTICAL PARTNER</span>

        <h1>
          Advancing Healthcare
          <br />
          Through Innovation
        </h1>

        <p>
          CurePhix Pharma is committed to delivering high-quality,
          affordable pharmaceutical products that improve lives and
          empower healthcare professionals.
        </p>

        <a href="#products" className="hero-btn">
          Explore Products →
        </a>
      </div>
    </section>
  );
}