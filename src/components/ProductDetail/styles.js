import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 25px;
    margin-top: 80px;
    font-family: ${(props) => props.theme.fonts.regular};
    @media(max-width: 768px){
        flex-direction: column;
    }
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
    @media(max-width: 768px) {
        margin-top: 70px;
        width: 60%;
        height: 40vh;
        box-shadow: 25px -10px ${(props) => props.theme.colors.primary};

    }
    @media(max-width: 425px) {
        height: 30vh;
    }
`;

export const Title = styled.h1`
    color: ${(props) => props.theme.colors.strong};
    font-weight: bold;
    font-size: 2rem;
    @media(max-width: 425px) {
        font-size: 1rem;
    }
    
`;

export const Price = styled.h1`
    color: ${(props) => props.theme.colors.strong};
    font-weight: bold;
    font-size: 1.3rem;
    @media(max-width: 425px) {
        font-size: 1rem;
    }
`;

export const Description = styled.p`
    color: ${(props) => props.theme.colors.text};
    border-radius: 10px;
    padding: 5px;
    @media(max-width: 425px) {
        font-size: 12px;
    }
`;

export const Image = styled.img`
    max-width: 45vw;
    max-height: 45vh;
    transition: all 0.2s ease;
    :hover{
        transform: scale(1.1);
    }
    @media(max-width: 768px) {
        margin-top: 30px;
        max-width: 40vw;
        max-height: 40vh;
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
