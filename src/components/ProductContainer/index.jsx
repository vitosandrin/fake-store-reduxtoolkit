import React from "react";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../features/product/productSlice";

import { Wrapper, ProductList, ProductCard } from "./styles";

const ProductContainer = () => {
    const category = useSelector(getAllCategories)

    return (
        <Wrapper>
            {category.map((data) => {
                return (
                    <ProductList key={data.id}>
                        <ProductCard>{data}</ProductCard>
                    </ProductList>
                )
            })}
        </Wrapper>
    )

}

export default ProductContainer;