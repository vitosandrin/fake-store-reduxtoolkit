import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllDataCart, removeFromCart } from "../../features/cart/cartSlice";

const CartPage = () => {
    const cart = useSelector(getAllDataCart);
    console.log(cart)
    const dispatch = useDispatch();

    const removeDataFromCart = (id) => {
        dispatch(removeFromCart(id));
      };

    return (
        <div>
            <>
                {cart.map((product) => {
                    return (
                        <div key={product.id}>
                            <h1>{product.title}</h1>
                            <h1>{product.description}</h1>
                            <button onClick={() => removeDataFromCart(product.id)}>remove</button>
                        </div>
                    )
                })}
            </>
        </div>
    )
}

export default CartPage;