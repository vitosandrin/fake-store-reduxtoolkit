import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const LinkA = styled(Link) `
    text-decoration: none;
    color: grey;
    transition: all 0.2s ease;
    :hover{
        color: black
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px;
`;

export const Card = styled.div`
    height: 200px;
    width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid grey;
    background-color: white;
    transition: all 0.2s ease;
    padding: 10px;
    border-radius: 25px;
    :hover {
        border: 1px solid black;
        transform: scale(1.1);
}
`;

export const CardImage = styled.img`
    max-height: 130px;
    max-width: 130px;
    margin-left: auto;
    margin-right: auto;
    overflow-y: hidden;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    padding: 5px;
`;

export const Price = styled.div`
    padding: 5px;
`;
