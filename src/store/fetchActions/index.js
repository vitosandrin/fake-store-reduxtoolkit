import api from "../../services/api";
import { setProducts } from "../ducks/products";
//import { selectedProduct } from "../ducks/selectProduct";

export const getAllProducts = () => {
    return (dispacht) => {
        api
            .get('/products')
            .then(response => {
                dispacht(setProducts(response.data));
            })
            .catch(console.log);
    };
};
/*
export const getProductById = () => {

    return (dispatch) => {
        api
            .get(`products/${productId}`)
            .then(res => {
                dispatch(selectedProduct(res.data));
            })
            .catch(console.log)
    }
}
*/