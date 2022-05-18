import React from "react";
import { useSelector } from "react-redux";
import { getAllDataCart } from "../../features/cart/cartSlice";

const CartPage = () => {

    const cart = useSelector(getAllDataCart);
    console.log(cart)

    return (
        <div>
            <>
                {cart.map((product) => {
                    return (
                        <div key={product.id}>
                            <h1>{product.title}</h1>
                        </div>
                    )
                })}
            </>
        </div>
    )
}

export default CartPage;