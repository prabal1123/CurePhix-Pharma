// import { useParams, useNavigate } from "react-router-dom";
// import "../styles/productDetails.css";

// import p1 from "../assets/images/1.Arginuron.png";
// import p2 from "../assets/images/2.Rovafeno.png";
// import p3 from "../assets/images/3Argilyco.png";
// import p4 from "../assets/images/4.Farotos.png";
// import p5 from "../assets/images/5.Panzora.png";

// export default function ProductDetails() {

//   const { name } = useParams();
//   const navigate = useNavigate();

//   const products = {

//     Arginuron: {
//       image: p1,
//       description: "Male fertility and antioxidant support supplement",
//       composition: [
//         "L-Arginine",
//         "Lycopene",
//         "Antioxidants and micronutrients"
//       ],
//       indications: [
//         "Male fertility support",
//         "Antioxidant supplementation",
//         "Fatigue and weakness",
//         "General nutritional deficiency"
//       ],
//       benefits: [
//         "Supports nitric oxide production",
//         "Improves blood circulation",
//         "Provides antioxidant protection",
//         "Supports reproductive health",
//         "Helps improve overall vitality"
//       ]
//     },

//     Rovafeno: {
//       image: p2,
//       description: "Lipid lowering therapy for cholesterol management",
//       composition: [
//         "Rosuvastatin 10 mg",
//         "Fenofibrate 160 mg"
//       ],
//       indications: [
//         "Mixed dyslipidemia",
//         "High cholesterol",
//         "High triglyceride levels",
//         "Prevention of cardiovascular risk"
//       ],
//       benefits: [
//         "Dual lipid-lowering mechanism",
//         "Reduces LDL cholesterol and triglycerides",
//         "Improves HDL (good cholesterol) levels",
//         "Helps manage overall lipid profile",
//         "Supports cardiovascular risk reduction"
//       ]
//     },

//     Argilyco: {
//       image: p3,
//       description: "Advanced antioxidant and cardiovascular support formula",
//       composition: [
//         "Lycopene 10% – 5000 mcg",
//         "Coenzyme Q10 – 100 mg",
//         "L-Arginine – 100 mg",
//         "Zinc Sulphate Monohydrate",
//         "Folic Acid",
//         "Elemental Selenium"
//       ],
//       indications: [
//         "Male fertility support",
//         "Cardiovascular health",
//         "Antioxidant supplementation",
//         "General health and wellness"
//       ],
//       benefits: [
//         "Powerful antioxidant combination",
//         "Supports heart health and energy production",
//         "Improves sperm quality and motility",
//         "Enhances blood circulation",
//         "Helps reduce oxidative stress"
//       ]
//     },

//     Farotos: {
//       image: p4,
//       description: "Broad-spectrum oral antibiotic for bacterial infections",
//       composition: [
//         "Faropenem Sodium 200 mg"
//       ],
//       indications: [
//         "Respiratory tract infections (bronchitis, pneumonia)",
//         "Urinary tract infections",
//         "Skin and soft tissue infections",
//         "ENT infections (sinusitis, tonsillitis, otitis media)"
//       ],
//       benefits: [
//         "Broad-spectrum oral antibiotic",
//         "Effective against many resistant bacteria",
//         "Stable against beta-lactamase enzymes",
//         "Good tissue penetration and bioavailability",
//         "Convenient oral therapy option for bacterial infections"
//       ]
//     },

//     Panzora: {
//       image: p5,
//       description: "Dual-action therapy for acidity and reflux disorders",
//       composition: [
//         "Pantoprazole Sodium 40 mg (Enteric Coated)",
//         "Domperidone 30 mg (Sustained Release)"
//       ],
//       indications: [
//         "Gastroesophageal reflux disease (GERD)",
//         "Acidity and heartburn",
//         "Gastritis",
//         "Peptic ulcer disease",
//         "Nausea associated with acid reflux"
//       ],
//       benefits: [
//         "Dual action relief for acidity and reflux",
//         "Reduces stomach acid secretion",
//         "Improves gastric motility",
//         "Provides prolonged symptom control",
//         "Helps relieve bloating and indigestion"
//       ]
//     }

//   };

//   const product = products[name];

//   if (!product) return <div>Product not found</div>;

//   return (
//     <section className="product-details">

//       <button
//         className="back-btn"
//         onClick={() => navigate("/")}
//       >
//         ← Back to Products
//       </button>

//       <div className="details-container">

//         <div className="product-image">
//           <img src={product.image} alt={name} />
//         </div>

//         <div className="product-info">

//           <span className="tag">PRODUCT DETAILS</span>

//           <h1>{name}</h1>

//           <p className="desc">{product.description}</p>

//           <h3>Composition</h3>
//           <ul>
//             {product.composition.map((item, i) => (
//               <li key={i}>✔ {item}</li>
//             ))}
//           </ul>

//           <h3>Indications</h3>
//           <ul>
//             {product.indications.map((item, i) => (
//               <li key={i}>✔ {item}</li>
//             ))}
//           </ul>

//           <h3>Key Benefits</h3>
//           <ul>
//             {product.benefits.map((item, i) => (
//               <li key={i}>✔ {item}</li>
//             ))}
//           </ul>

//         </div>

//       </div>

//     </section>
//   );
// }
import { useParams, useNavigate } from "react-router-dom";
import "../styles/productDetails.css";

export default function ProductDetails() {

  const { name } = useParams();
  const navigate = useNavigate();

  const baseURL =
    "https://xzpyaylnaakhtfqshhmv.supabase.co/storage/v1/object/public/Work/";

  const products = {

    Arginuron: {
      image: baseURL + "1.Arginuron.png",
      description: "Male fertility and antioxidant support supplement",
      composition: [
        "L-Arginine",
        "Lycopene",
        "Antioxidants and micronutrients"
      ],
      indications: [
        "Male fertility support",
        "Antioxidant supplementation",
        "Fatigue and weakness",
        "General nutritional deficiency"
      ],
      benefits: [
        "Supports nitric oxide production",
        "Improves blood circulation",
        "Provides antioxidant protection",
        "Supports reproductive health",
        "Helps improve overall vitality"
      ]
    },

    Rovafeno: {
      image: baseURL + "2.Rovafeno.png",
      description: "Lipid lowering therapy for cholesterol management",
      composition: [
        "Rosuvastatin 10 mg",
        "Fenofibrate 160 mg"
      ],
      indications: [
        "Mixed dyslipidemia",
        "High cholesterol",
        "High triglyceride levels",
        "Prevention of cardiovascular risk"
      ],
      benefits: [
        "Dual lipid-lowering mechanism",
        "Reduces LDL cholesterol and triglycerides",
        "Improves HDL (good cholesterol) levels",
        "Helps manage overall lipid profile",
        "Supports cardiovascular risk reduction"
      ]
    },

    Argilyco: {
      image: baseURL + "3Argilyco.png",
      description: "Advanced antioxidant and cardiovascular support formula",
      composition: [
        "Lycopene 10% – 5000 mcg",
        "Coenzyme Q10 – 100 mg",
        "L-Arginine – 100 mg",
        "Zinc Sulphate Monohydrate",
        "Folic Acid",
        "Elemental Selenium"
      ],
      indications: [
        "Male fertility support",
        "Cardiovascular health",
        "Antioxidant supplementation",
        "General health and wellness"
      ],
      benefits: [
        "Powerful antioxidant combination",
        "Supports heart health and energy production",
        "Improves sperm quality and motility",
        "Enhances blood circulation",
        "Helps reduce oxidative stress"
      ]
    },

    Farotos: {
      image: baseURL + "4.Farotos.png",
      description: "Broad-spectrum oral antibiotic for bacterial infections",
      composition: [
        "Faropenem Sodium 200 mg"
      ],
      indications: [
        "Respiratory tract infections (bronchitis, pneumonia)",
        "Urinary tract infections",
        "Skin and soft tissue infections",
        "ENT infections (sinusitis, tonsillitis, otitis media)"
      ],
      benefits: [
        "Broad-spectrum oral antibiotic",
        "Effective against many resistant bacteria",
        "Stable against beta-lactamase enzymes",
        "Good tissue penetration and bioavailability",
        "Convenient oral therapy option for bacterial infections"
      ]
    },

    Panzora: {
      image: baseURL + "5.Panzora.png",
      description: "Dual-action therapy for acidity and reflux disorders",
      composition: [
        "Pantoprazole Sodium 40 mg (Enteric Coated)",
        "Domperidone 30 mg (Sustained Release)"
      ],
      indications: [
        "Gastroesophageal reflux disease (GERD)",
        "Acidity and heartburn",
        "Gastritis",
        "Peptic ulcer disease",
        "Nausea associated with acid reflux"
      ],
      benefits: [
        "Dual action relief for acidity and reflux",
        "Reduces stomach acid secretion",
        "Improves gastric motility",
        "Provides prolonged symptom control",
        "Helps relieve bloating and indigestion"
      ]
    }

  };

  const product = products[name];

  if (!product) return <div>Product not found</div>;

  return (
    <section className="product-details">

      <button
        className="back-btn"
        onClick={() => navigate("/")}
      >
        ← Back to Products
      </button>

      <div className="details-container">

        <div className="product-image">
          <img src={product.image} alt={name} />
        </div>

        <div className="product-info">

          <span className="tag">PRODUCT DETAILS</span>

          <h1>{name}</h1>

          <p className="desc">{product.description}</p>

          <h3>Composition</h3>
          <ul>
            {product.composition.map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>

          <h3>Indications</h3>
          <ul>
            {product.indications.map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>

          <h3>Key Benefits</h3>
          <ul>
            {product.benefits.map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>

        </div>

      </div>

    </section>
  );
}