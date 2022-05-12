import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductCard from "../../components/ProductCard";
import { GridContainer, Menu, Title, Wrapper } from "./styles";

import { getAllProducts } from "../../store/fetchActions";

const Home = () => {

/*
    const fetchProducts = async () => {
        const response = await axios
            .get('https://fakestoreapi.com/products')
            .catch((error) => {
                console.log("error", error);
            });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts()
    }, [dispatch]) //dispatch para que um hook nao seja chamado dentro de outro hook
*/
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts())
    },[])

    return (
        <Wrapper>
            <Menu>
                <Title>fake-store</Title>
            </Menu>
            <GridContainer>
                <ProductCard />
            </GridContainer>
        </Wrapper>
    )
}

export default Home;