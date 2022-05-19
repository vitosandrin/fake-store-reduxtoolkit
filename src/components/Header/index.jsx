import React from "react";
import { useSelector } from "react-redux";
import { getAllDataCart } from "../../features/cart/cartSlice";

import { Wrapper, Title, LinkA} from './styles'

const Header = () => {
    const cart = useSelector(getAllDataCart);
    return (
        <Wrapper>
            <LinkA to={'/'}>
                <Title>Fake-Store</Title>
            </LinkA>
            <LinkA to={'/cart'}>
                <Title>Cart: {cart.length}</Title>
            </LinkA>
        </Wrapper>
    )
};

export default Header;