import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchAsyncCategory, fetchAsyncProducts } from "../../features/product/productSlice";

import { CategoryCard, ProductListing } from "../../components";

import { Background, GridContainer, Title, Wrapper } from "./styles";



const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncProducts());
        dispatch(fetchAsyncCategory())
    }, [dispatch])


    return (
        <Wrapper>
            <Background />
            <CategoryCard />
            <Title>All Products</Title>
            <GridContainer>
                <ProductListing />
            </GridContainer>
        </Wrapper>
    )
}

export default Home;