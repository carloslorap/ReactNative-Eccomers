import Axios from "./Axios";

//Productos getAll API call
const getAllProduct = async () => {
  try {
    const response = await Axios.get("listar_productos_publico");
    return response.data;
  } catch (error) {
    console.error("Error in products:", error);
    return undefined;
  }
};

//Productos getAll API call
const getProductSlug = async (slug) => {
  try {
    const response = await Axios.get(`obtener_producto_slug_publico/${slug}`);
    return response.data;
  } catch (error) {
    console.error("Error in products:", error);
    return undefined;
  }
};





export const productService = {
  getAllProduct,
  getProductSlug,
};
