import React from 'react';
import Navbar from '../elements/Navbar.component';
import ContainerMedium from '../elements/ContainerMedium';
import TitleSection from '../elements/titleSection';
import Helmet from 'react-helmet';
import GaleryTemp from './GaleryTemp';

const Galeria = () => {
    return (
        <>
            <Helmet>
                <title>Galeria</title>
            </Helmet>
            <Navbar/>
            <ContainerMedium>
                <TitleSection center='center' >Galeria</TitleSection>
                <GaleryTemp/>
            </ContainerMedium>
        </>
    );
}



export default Galeria;