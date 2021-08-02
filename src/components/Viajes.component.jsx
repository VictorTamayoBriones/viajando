import React from 'react';
import Navbar from '../elements/Navbar.component';
import ContainerMedium from '../elements/ContainerMedium';
import TitleSection from '../elements/titleSection';
import Helmet from 'react-helmet';
import ViewViajes from '../elements/Viajes';

const Viajes = () => {
    return (
        <>
            <Helmet>
                <title>Viajes</title>
            </Helmet>
            <Navbar/>
            <ContainerMedium>
                <TitleSection center='center' >Viajes Disponibles</TitleSection>
                <ViewViajes/>
            </ContainerMedium>
        </>
    );
}
 
export default Viajes;