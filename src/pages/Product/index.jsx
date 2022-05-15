import React, { useEffect } from "react";
import { ProductDetail } from "../../components/index";
import { Wrapper, Image, Container, Description, AddButton } from "./styles";

const Product = () => {

    const renderProductDetails = () => {
        return (
            <Wrapper>
                <ProductDetail />
            </Wrapper>
        )
    }

    return <>{renderProductDetails()}</>
}

export default Product;
