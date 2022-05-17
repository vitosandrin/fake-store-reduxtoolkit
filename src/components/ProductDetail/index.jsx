import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAsyncProduct, getSingleProduct, removeSingleProduct } from "../../features/product/productSlice";

const ProductDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(getSingleProduct);
    
    useEffect(() => {
        dispatch(fetchAsyncProduct(id));
        return () => {
            dispatch(removeSingleProduct());
        }
    },[ dispatch, id ])

    return <>{product.title}</>
}

export default ProductDetail;