import React from "react";
import { BiListPlus } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  addToCart,
  removeFromCart,
} from "../redux/actionCreators/productActions";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  return (
    <div
      className="shadow-lg rounded-3xl border  p-3 flex flex-col text-zinc-800 relative "
      key={product._id}
    >
      {pathname.includes("cart") && (
        <div className="bg-[#ccac00] text-white text-xl px-4 rounded-full absolute top-2 right-2">
          <p>{product.quantity}</p>
        </div>
      )}
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature) => {
            return (
              <li key={feature} className="text-sm ">
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex gap-2 mt-5">
        {/* add to cart */}
        {!pathname.includes("cart") && (
          <button
            onClick={() => dispatch(addToCart(product))}
            className="bg-[#ccac00] rounded-full py-1 px-2 flex-1 text-white text-bold"
          >
            Add to cart
          </button>
        )}
        {/* remove from cart */}
        {pathname.includes("cart") && (
          <button
            onClick={() => dispatch(removeFromCart(product))}
            className=" bg-red-700 rounded-full py-2 px-2 flex-1 text-white text-bold"
          >
            <RiDeleteBin2Line size={23} className="mx-auto" />
          </button>
        )}
        {/* wishlist */}
        {!pathname.includes("cart") && (
          <button
            title="Add to wishlist"
            className="bg-[#ccac00]  py-1 px-2 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
