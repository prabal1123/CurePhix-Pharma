
import { useState, useEffect } from "react";
import "../styles/hero.css";

const heroImages = [
  "https://xzpyaylnaakhtfqshhmv.supabase.co/storage/v1/object/public/Work/hero-pharma-1.jpg",
  "https://xzpyaylnaakhtfqshhmv.supabase.co/storage/v1/object/public/Work/hero-pharma-2.jpg",
  "https://xzpyaylnaakhtfqshhmv.supabase.co/storage/v1/object/public/Work/hero-pharma-3.jpg",
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

        <button className="hero-btn">Explore Products →</button>
      </div>
    </section>
  );
}