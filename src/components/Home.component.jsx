import React, {useState} from 'react';
import Helmet from 'react-helmet';
import Navbar from '../elements/Navbar.component';
import Container from '../elements/Container';
import Aside from '../elements/Aside';
import {ListContainer, TitleList, List, ListElement} from '../elements/ListaDespegable';
import {Daschboard} from '../elements/DaschBoard';
import CrearViaje from './CrearViaje.component';
import CrearOferta from './CrearOferta';
import AddGaleria from './AddGaleria';
import Error404 from './404';

import ViajesTemp from './viajesTemp';
import OfertasTemp from './OfertasTemp';
import GaleryTemp from './GaleryTemp';

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
                    changeViewComponent(<ViajesTemp/>);
                break;
            case 'makeTravel':
                    changeViewComponent(<CrearViaje/>);
                break;
            case 'viewOfertas':
                    changeViewComponent(null);
                    changeViewComponent(<OfertasTemp/>);
                break;
            case 'makeOfertas':
                    changeViewComponent(null);
                    changeViewComponent(<CrearOferta/>);
                break;
            case 'viewGaleria':
                    changeViewComponent(null);
                    changeViewComponent(<GaleryTemp/>);
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
                        <TitleList onClick={()=>changeVisibleViajes(!visibleViajes)} >Viajes
                        {
                            !visibleViajes ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        }
                        </TitleList>
                        <List>
                            <ListElement visible={visibleViajes} id="viewTravel" onClick={ viewSelect } >Ver Viajes</ListElement>
                            <ListElement visible={visibleViajes} id="makeTravel" onClick={ viewSelect } >Crear Viaje</ListElement>
                        </List>
                    </ListContainer>

                    <ListContainer>
                        <TitleList onClick={()=>changeVisibleOfertas(!visibleOfertas)} >Ofertas
                        {
                            !visibleOfertas ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        }
                        </TitleList>
                        <List>
                            <ListElement visible={visibleOfertas} id="viewOfertas" onClick={ viewSelect } >Ver Ofertas</ListElement>
                            <ListElement visible={visibleOfertas} id="makeOfertas" onClick={ viewSelect } >Crear Oferta</ListElement>
                        </List>
                    </ListContainer>

                    <ListContainer>
                        <TitleList onClick={()=>changeVisibleGaleria(!visibleGaleria)} >Galeria
                        {
                            !visibleGaleria ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                            </svg>
                        }
                        </TitleList>
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