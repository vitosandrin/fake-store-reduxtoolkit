import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAsyncProduct, getSingleProduct, removeSingleProduct } from "../../features/product/productSlice";
import { addToCart, getAllDataCart } from '../../features/cart/cartSlice'

const ProductDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(getSingleProduct);
    const cart = useSelector(getAllDataCart)

    useEffect(() => {
        dispatch(fetchAsyncProduct(id));
        return () => {
            dispatch(removeSingleProduct());
        }
    }, [dispatch])

    const addItemToCart = (product) => {
        dispatch(addToCart(product))
    }
    console.log(cart)

    return (
        <>
            <h1>{product.title}</h1>
            <button onClick={() => addItemToCart(product)}>cart</button>
        </>
    )
}

export default ProductDetail;