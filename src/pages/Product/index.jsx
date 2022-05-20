import React from "react";
import { ProductDetail } from "../../components";
import { Wrapper } from "./styles";


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
