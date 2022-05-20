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
    
    @media(max-width: 320px) {
        width: 150px;
        height: 15vh;
        flex-direction: column;
    }

    @media(max-width: 768px){
        width: 95%;
    }

    @media(max-width: 375px){
        width: 95%;
    }
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
    @media(max-width: 375px) {
        font-size: 0.5rem;
    }
  
    @media(max-width: 768px) {
        font-size: 0.9rem;
    }
    
    @media(max-width: 425px) {
        font-size: 0.9rem;
    }
`;




