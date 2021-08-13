import React, {useContext} from 'react';
import {CardTravel, ImageContainer, ImageTitle, Details} from '../elements/CardTravel';
import useObtnerViajes from '../hooks/useObtenerViajes';
import styled from 'styled-components';
import theme from '../theme';
import Modal from '../elements/Modal';
import { ContextModal } from '../Context/ModalContext';

const ViajesTemp = () => {

    const [viajes]=useObtnerViajes();
    const { modalState, setModal, setDocument, setColl } = useContext(ContextModal);

    const handleDelete = (id)=>{
        setModal(true);
        setDocument(id);
        setColl('viajes');
    }

    return(
        <>
            <ContainerViajes>
                {
                    viajes.length > 0 ?
                    viajes.map((viaje)=>{
                        return(
                            <CardTravel key={viaje.id} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" onClick={()=>handleDelete(viaje.id)} >
                                        <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                                    </svg> 
                                    <ImageContainer>
                                        <ImageTitle>{viaje.place}</ImageTitle>
                                        <img src={viaje.url} alt={viaje.place} />
                                    </ImageContainer>
                                    <Details>
                                        <h2>Detalles del viaje</h2>
                                        <p>
                                            {viaje.description}
                                        </p>
                                    </Details>
                                </CardTravel>
                            );
                        })
                        :
                        <Message>
                        <h3>No hay viajes disponibles</h3>
                        </Message>    
                }
               {
                   modalState ? <Modal titulo='el viaje' /> : ''
               } 
            </ContainerViajes>
        </>
    )
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

const Message = styled.div`
    width: 80%;
    margin: auto;
    color: ${theme.blanco};
    font-size: 30px;
    letter-spacing: 2px;
    text-align: center;
`;

export default ViajesTemp;