

// import { useNavigate } from "react-router-dom";
// import "../styles/products.css";

// import p1 from "../assets/images/1.Arginuron.png";
// import p2 from "../assets/images/2.Rovafeno.png";
// import p3 from "../assets/images/3Argilyco.png";
// import p4 from "../assets/images/4.Farotos.png";
// import p5 from "../assets/images/5.Panzora.png";

// export default function Products() {

//   const navigate = useNavigate();

//   const products = [
//     {
//       name: "Arginuron",
//       description: "Male fertility and antioxidant support formulation",
//       image: p1
//     },
//     {
//       name: "Rovafeno",
//       description: "Advanced lipid-lowering cardiovascular therapy",
//       image: p2
//     },
//     {
//       name: "Argilyco",
//       description: "CoQ10 antioxidant and cardiovascular support formula",
//       image: p3
//     },
//     {
//       name: "Farotos",
//       description: "Broad-spectrum oral antibiotic for bacterial infections",
//       image: p4
//     },
//     {
//       name: "Panzora",
//       description: "Dual-action therapy for acidity and GERD management",
//       image: p5
//     }
//   ];

//   const handleProductClick = (productName) => {
//     navigate(`/product/${productName}`);
//   };

//   return (
//     <section className="products">

//       <div className="products-header">
//         <h2>Featured Pharmaceutical Products</h2>
//         <p>
//           Explore our range of high-quality medicines designed to meet diverse healthcare needs.
//         </p>
//       </div>

//       <div className="products-grid">

//         {products.map((product, index) => (
//           <div
//             key={index}
//             className="product-card"
//             role="button"
//             tabIndex={0}
//             onClick={() => handleProductClick(product.name)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") {
//                 handleProductClick(product.name);
//               }
//             }}
//           >

//             <div className="product-image">
//               <img src={product.image} alt={product.name} />
//             </div>

//             <h3>{product.name}</h3>

//             <p>{product.description}</p>

//             <span
//               className="view-link"
//               onClick={(e) => {
//                 e.stopPropagation();
//                 handleProductClick(product.name);
//               }}
//             >
//               View Details →
//             </span>

//           </div>
//         ))}

//       </div>

//     </section>
//   );
// }
import { useNavigate } from "react-router-dom";
import "../styles/products.css";

export default function Products() {

  const navigate = useNavigate();

  const baseURL =
    "https://xzpyaylnaakhtfqshhmv.supabase.co/storage/v1/object/public/Work/";

  const products = [
    {
      name: "Arginuron",
      description: "Male fertility and antioxidant support formulation",
      image: baseURL + "1.Arginuron.png"
    },
    {
      name: "Rovafeno",
      description: "Advanced lipid-lowering cardiovascular therapy",
      image: baseURL + "2.Rovafeno.png"
    },
    {
      name: "Argilyco",
      description: "CoQ10 antioxidant and cardiovascular support formula",
      image: baseURL + "3Argilyco.png"
    },
    {
      name: "Farotos",
      description: "Broad-spectrum oral antibiotic for bacterial infections",
      image: baseURL + "4.Farotos.png"
    },
    {
      name: "Panzora",
      description: "Dual-action therapy for acidity and GERD management",
      image: baseURL + "5.Panzora.png"
    }
  ];

  const handleProductClick = (productName) => {
    navigate(`/product/${productName}`);
  };

  return (
    <section className="products">

      <div className="products-header">
        <h2>Featured Pharmaceutical Products</h2>
        <p>
          Explore our range of high-quality medicines designed to meet diverse healthcare needs.
        </p>
      </div>

      <div className="products-grid">

        {products.map((product, index) => (
          <div
            key={index}
            className="product-card"
            role="button"
            tabIndex={0}
            onClick={() => handleProductClick(product.name)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleProductClick(product.name);
              }
            }}
          >

            <div className="product-image">
              <img src={product.image} alt={product.name} />
            </div>

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <span
              className="view-link"
              onClick={(e) => {
                e.stopPropagation();
                handleProductClick(product.name);
              }}
            >
              View Details →
            </span>

          </div>
        ))}

      </div>

    </section>
  );
}