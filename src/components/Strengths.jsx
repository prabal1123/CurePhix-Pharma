import "../styles/strengths.css";

export default function Strengths() {
  return (
    <section className="strengths">

      <div className="strengths-header">
        <span className="tag">WHY CHOOSE US</span>
        <h2>Our Key Strengths</h2>
      </div>

      <div className="strengths-grid">

        <div className="strength-card">
          <div className="icon">🏅</div>
          <h3>Quality Products</h3>
          <p>
            Every product undergoes rigorous quality control and testing
            to ensure safety and efficacy.
          </p>
        </div>

        <div className="strength-card">
          <div className="icon">👥</div>
          <h3>Professional Team</h3>
          <p>
            Our team of experts brings decades of combined pharmaceutical
            experience.
          </p>
        </div>

        <div className="strength-card">
          <div className="icon">🛡️</div>
          <h3>Ethical Practices</h3>
          <p>
            We maintain the highest standards of ethics, transparency,
            and compliance.
          </p>
        </div>

        <div className="strength-card">
          <div className="icon">📦</div>
          <h3>Strong Distribution</h3>
          <p>
            A robust network ensuring timely availability of medicines
            across all regions.
          </p>
        </div>

      </div>

    </section>
  );
}