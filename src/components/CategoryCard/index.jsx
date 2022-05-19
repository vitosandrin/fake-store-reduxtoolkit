import React from "react";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../features/product/productSlice";

import { Wrapper, ProductList, ProductCard } from "./styles";

const CategoryCard = () => {
    const category = useSelector(getAllCategories)

    return (
        <Wrapper>
            {category.map((data,index) => {
                return (
                    <ProductList key={index}>
                        <ProductCard>{data}</ProductCard>
                    </ProductList>
                )
            })}
        </Wrapper>
    )

}

export default CategoryCard;