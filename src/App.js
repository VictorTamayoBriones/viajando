import React from 'react';
import {Helmet} from 'react-helmet';
import Navbar from './elements/Navbar.component';
import Slider from './components/Slider.component';
import ContainerMedium from './elements/ContainerMedium';
import OfertasSection from './elements/OfertasSection';
import Categorias from './elements/Categorias';
import Footer from './elements/Footer';
import DestinosFrecuentes from './elements/DestinosFrecuentes';

function App() {
  return (
    <>
      <Helmet>
        <title>Viajando Ando</title>
      </Helmet>

      <Navbar/>
      
      <ContainerMedium>
        <Slider/>
        <OfertasSection title={true} />
        <Categorias/>
        <DestinosFrecuentes/>
      </ContainerMedium>

      <Footer/>
    </>
  );
}

export default App;
