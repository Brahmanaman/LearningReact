import { useDispatch } from "react-redux";
import { addToCart, decrementQuantity, removeToCart } from "../features/CartSlice";
import { useLocation } from "react-router";

const Card = ({ product, quantity }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className="max-w-sm rounded-2xl border bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="h-64 bg-gray-100 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Category */}
        <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-blue-100 text-blue-700 capitalize">
          {product.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-semibold line-clamp-2">{product.title}</h2>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3">{product.description}</p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-yellow-500">
            ⭐ <span className="text-sm font-medium">{product.rating.rate}</span>
            <span className="text-gray-500 text-xs">({product.rating.count} reviews)</span>
          </div>

          {/* Price */}
          <span className="text-xl font-bold text-green-600">${product.price}</span>
        </div>

        {/* Button */}
        {pathname === "/cart" ? (
          <div>
            <p className="text-center mb-3 font-semibold">Quantity - 1</p>
            <button
              onClick={() => dispatch(removeToCart(product))}
              className="w-full rounded-xl bg-black text-white py-2.5 font-medium hover:bg-gray-800 transition cursor-pointer"
            >
              Remove from Cart
            </button>
          </div>
        ) : quantity ? (
          <div className="flex items-center justify-center gap-2 ">
            <p
              onClick={() => dispatch(decrementQuantity(product))}
              className="cursor-pointer bg-red-500 text-white font-bold px-2"
            >
              -
            </p>
            <p>{quantity}</p>
            <p
              onClick={() => dispatch(addToCart(product))}
              className="cursor-pointer bg-green-500 text-white font-bold px-2"
            >
              +
            </p>
          </div>
        ) : (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="w-full rounded-xl bg-black text-white py-2.5 font-medium hover:bg-gray-800 transition cursor-pointer"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
