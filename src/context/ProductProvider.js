import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const CONTEXT = createContext();

function ProductProvider({ children }) {
  const [data, setData] = useState([]);

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

export const useProducts = () => {
  const context = useContext(CONTEXT);
  return context;
};

export default ProductProvider;
