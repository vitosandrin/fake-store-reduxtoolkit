import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 45px;
    font-family: ${(props) => props.theme.fonts.regular};
`;

export const Content = styled.div`
    display: flex;
    height: 40vh;
    width: 70vw;
    margin-top: 50px;
    padding: 20px;
    border-radius: 20px;
    align-items: center;
    text-align: center;
    justify-content: space-around;
    border: 1px solid ${(props) => props.theme.colors.primary};
    box-shadow: 50px -20px ${(props) => props.theme.colors.primary};
    @media(max-width: 768px){
        justify-content: center;
        height: 20vh;
        width: 75vw;
    }
    @media(max-width: 425px){
        justify-content: center;
        height: 10vh;
        width: 60vw;
        box-shadow: 15px -5px ${(props) => props.theme.colors.primary};

    }
`;

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.strong};
    font-weight: bold;
    font-size: 1.4rem;
    max-width: 30%;
    @media(max-width: 768px){
        font-size: 1rem;
        margin-right: 7%
    }
    @media(max-width: 425px){
        font-size: 12px;
    }
`;

export const Price = styled.h1`
    color: ${(props) => props.theme.colors.strong};
    font-size: 1.2rem;
    @media(max-width: 768px){
     font-size: 1rem   
    }
    @media(max-width: 425px){
     font-size: 12px;   
    }

`;

export const Image = styled.img`
    max-width: 40vw;
    max-height: 40vh;
    @media(max-width: 768px){
        height: 13vh;
        width: 13vw;
        margin-right: 7%;
    }
    @media(max-width: 425px){
        height: 7vh;
        width: 7vw;
    }


`;

export const Button = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    height: 50px;
    width: 100px;
    padding: 2px;
    font-size: 1.3rem;
    color: ${(props) => props.theme.colors.text};
    transition: all 0.2s ease;
    :hover{
        transform: scale(1.1);
        background-color: ${(props) => props.theme.colors.primary};
        border: none;
        color: white;
    }
    @media(max-width: 768px){
        font-size: 1rem;
        width: 80px;
        margin-left: 10%;
        height: 30px;
        width: 70px;
    }

    @media(max-width: 425px){
        height: 20px;
    }
`;
