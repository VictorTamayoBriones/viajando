import React from 'react';
import Navbar from '../elements/Navbar.component';
import ContainerMedium from '../elements/ContainerMedium';
import TitleSection from '../elements/titleSection';
import Helmet from 'react-helmet';
import GaleriaElement from '../elements/GaleriaElement';

const Galeria = () => {
    return (
        <>
            <Helmet>
                <title>Galeria</title>
            </Helmet>
            <Navbar/>
            <ContainerMedium>
                <TitleSection center='center' >Galeria</TitleSection>
                <GaleriaElement/>
            </ContainerMedium>
        </>
    );
}



export default Galeria;