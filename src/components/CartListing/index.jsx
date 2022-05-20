import React from "react";
import { useSelector } from "react-redux";
import { getAllDataCart } from "../../features/cart/cartSlice";
import { ProductCart } from "../index";
import { Container } from "./styles";

const CartListing = () => {
    const cart = useSelector(getAllDataCart);

    const renderList = cart.map((product, index) => {
        return(
            <Container key={index}>
                <ProductCart  data={product} />
            </Container>
        )
    })
    
    return <>{renderList}</>
}

export default CartListing;