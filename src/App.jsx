// import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Strengths from "./components/Strengths";
// import Products from "./components/Products";
// import ProductDetails from "./components/ProductDetails";
// import Certifications from "./components/Certifications";
// import Coverage from "./components/Coverage";
// import Footer from "./components/Footer";
// import WhatsappFloat from "./components/WhatsappFloat";
// import MapFloat from "./components/mapFloat";
// import Motive from "./components/Motive";



// function HomePage() {
//   return (
//     <>
//       <Hero />
//       <About />
//       <Motive />
//       <Strengths />
//       <Products />
//       <Certifications />
//       <Coverage />
//       <Footer />
//       <WhatsappFloat />
//       <MapFloat /> 
//     </>
//   );
// }

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/product/:name" element={<ProductDetails />} />
//       </Routes>

//     </>
//   );
// }

// export default App;
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Strengths from "./components/Strengths";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Certifications from "./components/Certifications";
import Coverage from "./components/Coverage";
import Footer from "./components/Footer";
import WhatsappFloat from "./components/WhatsappFloat";
import MapFloat from "./components/mapFloat";
import Motive from "./components/Motive";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Motive />
      <Strengths />
      <Products />
      <Certifications />
      <Coverage />
      <Footer />
      <WhatsappFloat />
      <MapFloat /> 
    </>
  );
}

function App() {
  return (
    /* 👇 The Bulletproof Wrapper 👇 */
    <div style={{ overflowX: "hidden", width: "100%", maxWidth: "100vw", position: "relative" }}>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:name" element={<ProductDetails />} />
      </Routes>

    </div>
  );
}

export default App;