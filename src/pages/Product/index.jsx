import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../../store/ducks/selectProduct";
// analisar -1 import { getProductById } from "../../store/fetchActions";
import { addItem } from '../../store/ducks/cart'
import { Wrapper, Image, Container, Description, AddButton } from "./styles";
import api from '../../services/api'

const Product = () => {

    const product = useSelector((state) => state.product)
    const { id } = useParams();
    const dispatch = useDispatch();

    const fetchProductById = async () => {
        const response = await api
            .get(`/products/${id}`)
            .catch((error) => {
                console.log("error", error)
            })
        dispatch(selectedProduct(response.data))
    }

    useEffect(() => {
        fetchProductById(id)
    }, [dispatch, id])

    //product = props
    function addItemCart(product) {
        dispatch(addItem(product))
    }


    /*analisar -1
        useEffect(() => {
            dispatch(getProductById())
        }, []);
    */
    //console.log("product", product)

    const renderProductDetails = () => {
        const selectedProduct = product[product.length -1]
        return (
            <Wrapper>
                <button product={product} onClick={() => addItemCart(product)}>clique aqui</button>
                {Object.keys(product).length === 0 ? (
                    <>
                        <div> Loading... </div>
                    </>
                ) : (
                    <div>
                        {selectedProduct.title}
                    </div>
                )}
            </Wrapper>
        )
    }

    return <>{renderProductDetails()}</>
}

export default Product;
