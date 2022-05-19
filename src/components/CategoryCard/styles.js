import styled from 'styled-components';


export const Wrapper = styled.section`
    display: flex;
    position: sticky;
    top: 10vh;
    align-items: center;
    justify-content: space-around;
    height: 10vh;
    width: 80%;
    border-radius: 20px;
    margin-top: 20px;
    box-shadow: 0 6px 16px ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.regular};
    background-color: ${(props) => props.theme.colors.primary};
`;

export const ProductList = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    height: 5vh;
`;

export const ProductCard = styled.a`
    color: white;
    font-size: 1rem;
`;




