import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { removeItem } from '../../store/ducks/cart';
import ItemCart from "../../components/ItemCart";

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    function removeItemCart(id) {
        dispatch(removeItem(id));
    }

    return (
        <div>
            <div>
                {cart.lenght === 0 ? (
                    <p>Sem Produtos no Carrinho</p>
                ) : (
                    <>
                        {cart.map((product) => <ItemCart key={product.id} product={product} removeItemCart={removeItemCart} />)}
                    </>
                )}
            </div>
        </div>
    )
}

export default Cart;