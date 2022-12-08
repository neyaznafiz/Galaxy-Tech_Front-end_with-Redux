import { loadProduct } from "../../actionCreators/productActions";

const fetchProduct = () => {
  return async (dispatch, getState) => {
    const res = await fetch(
      "https://galaxy-techserver-production.up.railway.app/products"
    );
    const data = await res.json();

    if (data.data.length) {
      dispatch(loadProduct(data.data));
    }
  };
};

export default fetchProduct;
