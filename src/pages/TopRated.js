import React from "react";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductProvider";

const TopRated = () => {
  const {
    state: { products, loading, error },
  } = useProducts();

  let content;

  if (loading) {
    content = (
      <div class="flex items-center justify-center">
        <div
          class="spinner-border animate-spin inline-block w-20 h-20 border-4 border-black rounded-full"
          role="status"
        >
          <div class="visually-hidden h-[25px] -mt-4 bg-white"></div>
        </div>
      </div>
    );
  }

  if (error) {
    content = (
      <p className="text-3xl w-96 border bg-red-700 text-white px-4 py-3 rounded-full text-center ">
        Something went wrong..!
      </p>
    );
  }

  if (!loading && !error && products.length === 0) {
    content = <p>Nothing to show, Product list is empty..!</p>;
  }

  if (!loading && !error && products.length) {
    content = products
      .filter((product) => product.rating >= 4)
      .map((product) => <ProductCard key={product._id} product={product} />);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default TopRated;
