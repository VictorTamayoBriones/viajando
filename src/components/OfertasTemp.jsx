import React from 'react'
import useObtenerOfertas from '../hooks/useObtenerOfertas';
import styled from 'styled-components';
import Ofertacard from '../elements/OfertaCard';

const OfertasTemp = () => {

    const [ofertas] = useObtenerOfertas();
    console.log(ofertas);
    return (  
        <ContainerOfertas>
            {
                ofertas.map((oferta)=>{
                    return(
                        <Ofertacard>
                            <div className="image">
                                <img src={oferta.url} alt={oferta.place} />
                            </div>
                            <div className="info">
                                <p className="place">{oferta.place}</p>
                                <p>{oferta.description}</p>
                            </div>
                        </Ofertacard>
                    )
                })
            }
        </ContainerOfertas>
    );
}

const ContainerOfertas = styled.div`
    width: 98%;
    height: 100vh;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
`;

export default OfertasTemp;