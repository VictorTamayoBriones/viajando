import React from 'react';
import Navbar from '../elements/Navbar.component';
import ContainerMedium from '../elements/ContainerMedium';
import TitleSection from '../elements/titleSection';
import OfertasTemp from './OfertasTemp';
import Helmet from 'react-helmet';

const Ofertas = () => {
    return (
        <>
            <Helmet>
                <title>Ofertas</title>
            </Helmet>
            <Navbar/>
            <ContainerMedium>
                <TitleSection center='center' >Ofertas Disponibles</TitleSection>
                <OfertasTemp/>
            </ContainerMedium>
        </>
    );
}

export default Ofertas;