import React from "react";

import { useSelector } from "react-redux";

import { getAllProducts } from "../../features/product/productSlice";

import { ProductCard } from "../index";
import { Container } from "./styles";

const ProductListing = () => {

    const products = useSelector(getAllProducts);

    const renderList = products.map((product, index) => {
        return (
            <Container key={index} >
                <ProductCard data={product} />
            </Container>
        )
    })

    return <>{renderList}</>
}

export default ProductListing;

