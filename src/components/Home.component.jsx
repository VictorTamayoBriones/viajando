import React, {useState} from 'react';
import Helmet from 'react-helmet';
import Navbar from '../elements/Navbar.component';
import Container from '../elements/Container';
import Aside from '../elements/Aside';
import {ListContainer, TitleList, List, ListElement} from '../elements/ListaDespegable';
import {Daschboard} from '../elements/DaschBoard';
import ViewViajes from '../elements/Viajes';
import CrearViaje from './CrearViaje.component';
import ViewOfertas from '../elements/OfertasSection';
import CrearOferta from './CrearOferta';
import GaleriaElement from '../elements/GaleriaElement';
import AddGaleria from './AddGaleria';
import Error404 from './404';

const Home = () => {

    const [visibleViajes, changeVisibleViajes]=useState(false);
    const [visibleOfertas, changeVisibleOfertas]=useState(false);
    const [visibleGaleria, changeVisibleGaleria]=useState(false);
    const [viewComponent, changeViewComponent]=useState(null);

    const viewSelect = (e)=>{
        let componentSelected = e.target.id;

        switch (componentSelected) {
            case 'viewTravel':
                    changeViewComponent(null);
                    changeViewComponent(<ViewViajes/>);
                break;
            case 'makeTravel':
                    changeViewComponent(<CrearViaje/>);
                break;
            case 'viewOfertas':
                    changeViewComponent(null);
                    changeViewComponent(<ViewOfertas/>);
                break;
            case 'makeOfertas':
                    changeViewComponent(null);
                    changeViewComponent(<CrearOferta/>);
                break;
            case 'viewGaleria':
                    changeViewComponent(null);
                    changeViewComponent(<GaleriaElement/>);
                break;
            case 'addGaleria':
                    changeViewComponent(null);
                    changeViewComponent(<AddGaleria/>);
                break;
            default:
                    changeViewComponent(null);
                    changeViewComponent(<Error404/>)
                break;
        }

    }

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
                            <ListElement visible={visibleViajes} id="viewTravel" onClick={ viewSelect } >Ver Viajes</ListElement>
                            <ListElement visible={visibleViajes} id="makeTravel" onClick={ viewSelect } >Crear Viaje</ListElement>
                        </List>
                    </ListContainer>

                    <ListContainer>
                        <TitleList onClick={()=>changeVisibleOfertas(!visibleOfertas)} >Ofertas</TitleList>
                        <List>
                            <ListElement visible={visibleOfertas} id="viewOfertas" onClick={ viewSelect } >Ver Ofertas</ListElement>
                            <ListElement visible={visibleOfertas} id="makeOfertas" onClick={ viewSelect } >Crear Oferta</ListElement>
                        </List>
                    </ListContainer>

                    <ListContainer>
                        <TitleList onClick={()=>changeVisibleGaleria(!visibleGaleria)} >Galeria</TitleList>
                        <List>
                            <ListElement visible={visibleGaleria} id="viewGaleria" onClick={ viewSelect }  >Ver Galeria</ListElement>
                            <ListElement visible={visibleGaleria} id="addGaleria"  onClick={ viewSelect } >Agregar a Galeria</ListElement>
                        </List>
                    </ListContainer>
                </Aside>

                <Daschboard>
                    { viewComponent && viewComponent }
                </Daschboard>
            </Container>

        </>
    );
}
 
export default Home;