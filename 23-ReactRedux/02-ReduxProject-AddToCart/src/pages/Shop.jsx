import React, { useEffect, useState } from "react";
import { getProducts } from "../config/AxiosInstance";
import ProductCard from "../components/CArd";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-wrap justify-center gap-5 p-6">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
