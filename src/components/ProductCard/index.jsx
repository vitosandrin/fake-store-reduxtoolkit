import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Card, CardImage, Content, LinkA, Price, Title, Wrapper } from "./styles";

const ProductCard = () => {
    const products = useSelector((state) => state.products);

    const renderList = products.map((product, index) => {
        return (
            <Wrapper key={index} product={product} >
                <LinkA to={`/product/${product.id}`} >
                    <Card>
                        <CardImage src={product.image} alt={product.title} />
                        <Content>
                            <Title>{product.title}</Title>
                            <Price>U$ {product.price}</Price>
                        </Content>
                    </Card>
                </LinkA>
            </Wrapper>
        );
    });

    return (
        <>{renderList}</>
    );
};

export default ProductCard;