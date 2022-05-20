import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart/cartSlice";

import { Wrapper, Content, Image, Title, Price, Button } from "./styles";



const ProductCart = (props) => {
    const { data } = props;
    const dispatch = useDispatch();

    const removeDataFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <Wrapper>
            <Content key={data.id}>
                <Image src={data.image} />
                <Title>{data.title.substring(0,19)}</Title>
                <Price>U$ {data.price.toFixed(2)}</Price>
                <Button onClick={() => removeDataFromCart(data.id)}>remove</Button>
            </Content>
        </Wrapper>
    )
};

export default ProductCart;