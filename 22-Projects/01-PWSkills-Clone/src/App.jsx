import Footer from "./components/footer/Footer";
import Header from "./components/navbar/Header";
import NavBar from "./components/navbar/NavBar";
import OurProducts from "./components/products/OurProducts";
import Products from "./components/products/Products";
import Feature from "./components/studentSection/Feature";
import FeatureCard from "./components/studentSection/FeatureCard";

const App = () => {
  return (
    <>
      <NavBar />
      <main>
        <Header />
        <Feature />
        <FeatureCard />
        <OurProducts />
        <Products />
      </main>
      <Footer />
    </>
  );
};

export default App;
