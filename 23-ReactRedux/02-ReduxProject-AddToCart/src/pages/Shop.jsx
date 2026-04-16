import React, { useEffect, useState } from "react";
import { getProducts } from "../config/AxiosInstance";
import Card from "../components/Card";
import { useSelector } from "react-redux";

const Shop = () => {
  const [products, setProducts] = useState([]);
  let { cartItems } = useSelector((state) => state.cart);

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
      {products?.map((product) => {
        let card = cartItems.find((item) => item.id === product.id);
        return <Card key={product.id} product={product} quantity={card?.quantity} />;
      })}
    </div>
  );
};

export default Shop;
