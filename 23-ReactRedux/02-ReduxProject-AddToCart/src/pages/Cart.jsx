import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  if (cartItems.length < 1) return <h1>No item here.</h1>;
  return (
    <>
      <div className="bg-gray-50 flex flex-wrap gap-5 p-6">
        {cartItems?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Cart;
