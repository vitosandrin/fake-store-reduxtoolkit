import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;

    height: 12vh;
    width: 100%;

    border-bottom: 2px solid grey;
`;

export const Title = styled.h2`

`;

/*export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    flex-wrap: wrap; //quebra a linha row em caso de overflow
    //flex-direction: row;
    align-items: center;
    justify-content: center;
`;  IMPLEMENTAR DISPLAY GRID NA HR DE FAZER A RESPONSIVIDADE */

export const GridContainer = styled.div`
    display: flex;
    flex-wrap: wrap; //quebra a linha row em caso de overflow
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ContainerSlider = styled.div`
    display: flex;
`;

