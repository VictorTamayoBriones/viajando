import React from 'react';
import Navbar from '../elements/Navbar.component';
import TitleSection from '../elements/titleSection';
import Helmet from 'react-helmet';
import ViajesTemp from './viajesTemp';
import styled from 'styled-components';

const Viajes = () => {
    return (
        <>
            <Helmet>
                <title>Viajes</title>
            </Helmet>
            <Navbar/>
            <ContainerViajes>
                <TitleSection center='center' >Viajes Disponibles</TitleSection>
                <ViajesTemp/>
            </ContainerViajes>
        </>
    );
}

const ContainerViajes = styled.div`
    width: 95%;
    position: relative;
    margin: auto;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
 
export default Viajes;