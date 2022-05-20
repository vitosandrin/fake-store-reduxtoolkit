import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAsyncProduct, getSingleProduct, removeSingleProduct } from "../../features/product/productSlice";
import { addToCart } from '../../features/cart/cartSlice'
import { Container, Title, Image, Content, Description, Button, Price } from "./styles";


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
                <Description>{product.description}</Description>
                <Price>U$ {product.price}</Price>
                <Button onClick={() => addItemToCart(product)}>add to cart</Button>
            </Content>
        </Container>
    )
}

export default ProductDetail;