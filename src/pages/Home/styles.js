import styled from 'styled-components'
import pexels from '../../assets/images/pexelsss.jpeg'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: ${(props) => props.theme.fonts.regular};
`;

export const Background = styled.section`
    background-image: url(${pexels});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    height: 85vh;
    width: 100%;
    overflow-x: hidden;
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

