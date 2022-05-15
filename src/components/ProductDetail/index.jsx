import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAsyncProduct, getSingleProduct } from "../../features/product/productSlice";

const ProductDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getSingleProduct);
    console.log(data)
    
    useEffect(() => {
        dispatch(fetchAsyncProduct(id));
    },[ dispatch, id ])

    return <>{data.title}</>
}

export default ProductDetail;