import React, { createContext, useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { initialState, productReducer } from "../state/productState/ProductReducer";

const CONTEXT = createContext();

function ProductProvider({ children }) {
  const [data, setData] = useState([]);

  // useReducer
  const [state, dispatch] = useReducer(productReducer, initialState)

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => {
      const data = res;
      setData(data.data);
    });
  }, []);

  const value = {
    data,
  };

  return <CONTEXT.Provider value={value}>{children}</CONTEXT.Provider>;
}

// useProduct hook
export const useProducts = () => {
  const context = useContext(CONTEXT);
  return context;
};

export default ProductProvider;
