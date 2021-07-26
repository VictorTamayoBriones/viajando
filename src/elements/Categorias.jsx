import React from 'react';
import TitleSection from '../elements/titleSection';
import styled from 'styled-components';
import Categoria from '../elements/Categoria';

const Categorias = () => {
    return (
        <>
            <TitleSection>Categorias</TitleSection>
            <CategoriasContainer>
                <Categoria>Ciudad</Categoria>
                <Categoria>Playa</Categoria>
                <Categoria>Aventura</Categoria>
                <Categoria>Pueblos Magicos</Categoria>
            </CategoriasContainer>
        </>
    );
}

const CategoriasContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export default Categorias;