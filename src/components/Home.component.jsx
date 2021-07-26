import React, {useState} from 'react';
import Helmet from 'react-helmet';
import Navbar from '../elements/Navbar.component';
import Container from '../elements/Container';
import Aside from '../elements/Aside';
import {ListContainer, TitleList, List, ListElement} from '../elements/ListaDespegable';
import {Daschboard} from '../elements/DaschBoard';
import CrearViaje from './CrearViaje.component';

const Home = () => {

    const [visibleViajes, changeVisibleViajes]=useState(false);
    const [visibleOfertas, changeVisibleOfertas]=useState(false);
    return (
        <>
            <Helmet>
                <title>Administrador</title>
            </Helmet>

            <Navbar admin />

            <Container>
                <Aside>
                    <ListContainer>
                        <TitleList onClick={()=>changeVisibleViajes(!visibleViajes)} >Viajes</TitleList>
                        <List>
                            <ListElement visible={visibleViajes} >Ver Viajes</ListElement>
                            <ListElement visible={visibleViajes} >Crear Viaje</ListElement>
                        </List>
                    </ListContainer>

                    <ListContainer>
                        <TitleList onClick={()=>changeVisibleOfertas(!visibleOfertas)} >Ofertas</TitleList>
                        <List>
                            <ListElement visible={visibleOfertas} >Ver Ofertas</ListElement>
                            <ListElement visible={visibleOfertas} >Crear Oferta</ListElement>
                        </List>
                    </ListContainer>
                </Aside>

                <Daschboard>
                    <CrearViaje/>
                </Daschboard>
            </Container>

        </>
    );
}
 
export default Home;