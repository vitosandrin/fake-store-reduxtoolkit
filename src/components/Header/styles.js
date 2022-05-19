import styled from 'styled-components'
import { Link } from "react-router-dom";


export const Wrapper = styled.section`
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: space-around;
    height: 7vh;
    width: 100%;
    background-color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.regular};
    box-shadow: 0 3px 8px ${(props) => props.theme.colors.text};
`;
export const Title = styled.h2`
    color: white;
:hover {
        transform: scale(1.05);
}
`;

export const LinkA = styled(Link)`
    text-decoration: none;
`;