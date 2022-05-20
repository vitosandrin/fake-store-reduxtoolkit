import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;
    font-family: ${(props) => props.theme.fonts.regular};
`;

export const Content = styled.div`
    display: flex;
    height: 40vh;
    width: 65vw;
    margin-top: 50px;
    padding: 20px;
    border-radius: 20px;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    border: 1px solid ${(props) => props.theme.colors.primary};
    box-shadow: 50px -20px ${(props) => props.theme.colors.primary};
`;

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.strong};
    font-weight: bold;
    font-size: 1.4rem;
    max-width: 30%;
`;

export const Price = styled.h1`
    color: ${(props) => props.theme.colors.strong};
    font-size: 1.2rem;
`;

export const Image = styled.img`
    max-width: 40vw;
    max-height: 40vh;
`;

export const Button = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    height: 40px;
    width: 150px;
    padding: 7px;
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.text};
    transition: all 0.2s ease;
    :hover{
        transform: scale(1.1);
        background-color: ${(props) => props.theme.colors.primary};
        border: none;
        color: white;
    }
`;
