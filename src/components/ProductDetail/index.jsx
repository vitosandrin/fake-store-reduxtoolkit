import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAsyncProduct, getSingleProduct, removeSingleProduct } from "../../features/product/productSlice";
import { addToCart } from '../../features/cart/cartSlice'
import { Container, Title, Image, Content } from "./styles";

const ProductDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(getSingleProduct);

    useEffect(() => {
        dispatch(fetchAsyncProduct(id));
        return () => {
            dispatch(removeSingleProduct(id));
        }
    }, [dispatch, id])

    const addItemToCart = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <Container>
            <Image src={product.image} />
            <Content>
                <Title>{product.title}</Title>
                <Title>{product.description}</Title>
                <button onClick={() => addItemToCart(product)}>cart</button>
            </Content>
        </Container>
    )
}

export default ProductDetail;