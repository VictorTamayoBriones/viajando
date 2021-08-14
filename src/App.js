import React from 'react';
import {Helmet} from 'react-helmet';
import Navbar from './elements/Navbar.component';
import Slider from './components/Slider.component';
import ContainerMedium from './elements/ContainerMedium';
import Categorias from './elements/Categorias';
import Footer from './elements/Footer';
import DestinosFrecuentes from './elements/DestinosFrecuentes';
import OfertasTemp from './components/OfertasTemp';
import TitleSection from './elements/titleSection';

function App() {
  return (
    <>
      <Helmet>
        <title>Viajando Ando</title>
      </Helmet>

      <Navbar/>
      
      <ContainerMedium>
        <Slider/>
        <TitleSection >Ofertas</TitleSection>
        <OfertasTemp home={true} />
        <Categorias/>
        <DestinosFrecuentes/>
      </ContainerMedium>

      <Footer/>
    </>
  );
}

export default App;
