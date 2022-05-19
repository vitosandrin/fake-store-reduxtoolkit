import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchAsyncProducts } from "../../features/product/productSlice";

import { ProductListing } from "../../components";

import { Background, GridContainer, Wrapper } from "./styles";



const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncProducts());
    }, [dispatch])

    return (
        <Wrapper>
            <Background />
            <h1>All Products</h1>
            <GridContainer>
                <ProductListing />
            </GridContainer>
        </Wrapper>
    )
}

export default Home;