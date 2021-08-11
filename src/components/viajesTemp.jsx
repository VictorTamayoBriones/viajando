import React from 'react';
import {CardTravel, ImageContainer, ImageTitle, Details} from '../elements/CardTravel';
import useObtnerViajes from '../hooks/useObtenerViajes';
import styled from 'styled-components';

const ViajesTemp = () => {

    const [viajes]=useObtnerViajes();

    return(
        <>
            <ContainerViajes>
                {
                    viajes.map((viaje)=>{
                        return(
                            <CardTravel key={viaje.id} >
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
                }             
            </ContainerViajes>
        </>
    )
}

const ContainerViajes = styled.div`
    width: 95%;
    margin: auto;
    height: max-content;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export default ViajesTemp;