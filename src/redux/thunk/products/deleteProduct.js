import { deleteProduct } from "../../actionCreators/productActions";

const deleteProductById = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://galaxy-techserver-production.up.railway.app/product/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const data = await res.json();

    if (data.acknowledged) {
      dispatch(deleteProduct(id));
    }
  };
};

export default deleteProductById;
