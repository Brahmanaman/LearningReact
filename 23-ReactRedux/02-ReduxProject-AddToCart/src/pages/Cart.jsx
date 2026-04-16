import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/CArd";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-wrap justify-center gap-5 p-6">
        {cartItems?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Cart;
