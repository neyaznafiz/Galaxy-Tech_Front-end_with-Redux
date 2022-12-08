import { addProduct } from "../../actionCreators/productActions";

const addProductData = (product) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      "https://galaxy-techserver-production.up.railway.app/product",
      {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(
        addProduct({
          _id: data.insertedId,
          ...product,
        })
      );
    }
  };
};

export default addProductData;
