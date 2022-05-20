import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const Container = styled.div`
    display: flex;
    position: absolute;
    justify-content: space-around;
    align-items: center;
    padding: 25px;
    margin-top: 100px;
    font-family: ${(props) => props.theme.fonts.regular};
`;

export const Content = styled.div`
    display: flex;
    height: 50vh;
    width: 40%;
    padding: 20px;
    border-radius: 20px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    border: 1px solid ${(props) => props.theme.colors.primary};
    box-shadow: 50px -20px ${(props) => props.theme.colors.primary};
`;

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.strong};
    font-weight: bold;
    font-size: 2rem;
`;

export const Price = styled.h1`
    color: ${(props) => props.theme.colors.strong};
    font-weight: bold;
    font-size: 2rem;
`;

export const Description = styled.p`
    color: ${(props) => props.theme.colors.text};
    border-radius: 10px;
    padding: 5px;
`;

export const Image = styled.img`
    max-width: 45vw;
    max-height: 45vh;
    transition: all 0.2s ease;
    :hover{
        transform: scale(1.1);
    }
`;

export const Button = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    height: 40px;
    width: 120px;
    padding: 3px;
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
