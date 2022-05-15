import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { fetchAsyncProducts } from "../../features/product/productSlice";

import { ProductListing } from "../../components";

import { GridContainer, Menu, Title, Wrapper } from "./styles";


const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAsyncProducts());
    }, [dispatch])

    return (
        <Wrapper>
            <Menu>
                <Title>fake-store</Title>
            </Menu>
            <GridContainer>
                <ProductListing />
            </GridContainer>
        </Wrapper>
    )
}

export default Home;