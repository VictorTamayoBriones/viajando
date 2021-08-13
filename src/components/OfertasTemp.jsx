import React, {useContext} from 'react'
import useObtenerOfertas from '../hooks/useObtenerOfertas';
import styled from 'styled-components';
import Ofertacard from '../elements/OfertaCard';
import theme from '../theme';
import { ContextModal } from '../Context/ModalContext';
import Modal from '../elements/Modal';

const OfertasTemp = () => {

    const [ofertas] = useObtenerOfertas();
    const { modalState, setModal, setDocument, setColl }=useContext(ContextModal);

    const handleDelete = (id)=>{
        setModal(true);
        setDocument(id);
        setColl('ofertas');
    }

    return (  
        <ContainerOfertas>
            {   
                ofertas.length > 0?
                    ofertas.map((oferta)=>{
                        return(
                            <Ofertacard key={oferta.id} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" onClick={()=>handleDelete(oferta.id)} >
                                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                                </svg>
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
                : <Message><h3>No hay ofertas disponibles</h3></Message>
            }
            {modalState ? <Modal titulo='la oferta' /> : ''}
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

const Message = styled.div`
    width: 80%;
    color: ${theme.blanco};
    font-size: 30px;
    letter-spacing: 2px;
    text-align: center;
`;

export default OfertasTemp;