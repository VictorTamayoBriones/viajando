import React, {useContext} from 'react'
import {CardTravel, ImageContainer, ImageTitle, Details} from '../elements/CardTravel';
import styled from 'styled-components';
import theme from '../theme';
import { ContextCategoria } from '../Context/categoriaContext';
import useObtenerViajesPorCategoria from '../hooks/useObtenerViajesPorCategoria';

const ViajesPorCategoria = () => {

    const {categoriaHome}=useContext(ContextCategoria);
    const [viajesCategoria]=useObtenerViajesPorCategoria();

    console.log(viajesCategoria);

    return (
        <>
        <Title>{categoriaHome === 'pueblosMagicos' ? 'Pueblos Magicos' : categoriaHome}</Title>
        <ContainerViajes>
            {
                viajesCategoria.length > 0 ?
                    viajesCategoria.map((viaje)=>{
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
                :<Message><h3>No hay viajes disponibles</h3></Message>    
            }
        </ContainerViajes>
        </>
    );
}
 
const ContainerViajes = styled.div`
    width: 80%;
    padding: 12px 0px;
    position: relative;
    margin: auto;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 50px;
`;

const Message = styled.div`
    width: 80%;
    margin: auto;
    color: ${theme.blanco};
    font-size: 30px;
    letter-spacing: 2px;
    text-align: center;
`;

const Title = styled.h2`
    text-align: center;
    color: ${theme.naranja};
    padding-top: 20px;
    letter-spacing: 2px;
`;

export default ViajesPorCategoria;