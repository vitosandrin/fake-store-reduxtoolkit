import React from "react";
import { Card, CardImage, Content, LinkA, Price, Title, Wrapper } from "./styles";

const ProductCard = (props) => {
    const { data } = props;
    return (
        <Wrapper>
            <LinkA to={`/product/${data.id}`}>
                <Card key={data.id}>
                    <CardImage src={data.image} alt={data.title} />
                    <Content>
                        <Title>{data.title.substring(0,19)}</Title>
                        <Price>U${data.price.toFixed(2)}</Price>
                    </Content>
                </Card>
            </LinkA>
        </Wrapper>
    )
};

export default ProductCard;