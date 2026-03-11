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

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Strengths />
      <Products />
      <Certifications />
      <Coverage />
      <Footer />
      <WhatsappFloat />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:name" element={<ProductDetails />} />
      </Routes>

    </>
  );
}

export default App;