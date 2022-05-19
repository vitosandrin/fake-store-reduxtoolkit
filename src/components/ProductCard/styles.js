import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const LinkA = styled(Link)`
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    transition: all 0.2s ease;
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
    background-color: white;
    transition: all 0.2s ease;
    padding: 10px;
    border-radius: 25px;
    box-shadow: 0 2px 10px ${(props) => props.theme.colors.primary};
    :hover {
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
    color: ${(props) => props.theme.colors.text};
`;

export const Title = styled.h1`
    padding: 5px;
`;

export const Price = styled.div`
    padding: 5px;
`;
