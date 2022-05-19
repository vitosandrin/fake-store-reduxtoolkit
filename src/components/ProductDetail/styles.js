import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    padding: 25px;
`;

export const Title = styled.h2`
    color: black;
    border-radius: 10px;
    padding: 5px;
`;

export const Image = styled.img`
    max-width: 300px;
    max-height: 300px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;