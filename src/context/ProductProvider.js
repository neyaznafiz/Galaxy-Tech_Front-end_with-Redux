import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  // useState,
} from "react";
import axios from "axios";
import {
  initialState,
  productReducer,
} from "../state/productState/ProductReducer";
import { actionTypes } from "../state/productState/actionTypes";

const CONTEXT = createContext();

function ProductProvider({ children }) {
  // const [data, setData] = useState([]);

  // useReducer
  const [state, dispatch] = useReducer(productReducer, initialState);
  console.log(state);
  useEffect(() => {
    dispatch({ type: actionTypes.FETCHING_START });
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        const data = res;
        // setData(data.data);
        dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: data.data.data });
      })
      .catch(dispatch({ type: actionTypes.FETCHING_ERROR }));
  }, []);

  const value = {
    state,
    dispatch,
  };

  return <CONTEXT.Provider value={value}>{children}</CONTEXT.Provider>;
}

// useProduct hook
export const useProducts = () => {
  const context = useContext(CONTEXT);
  return context;
};

export default ProductProvider;
