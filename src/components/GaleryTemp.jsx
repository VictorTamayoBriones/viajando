import React, {useContext} from 'react'
import useObtenerGalery from '../hooks/useObtenerGalery';
import styled from 'styled-components';
import theme from '../theme';
import { ContextModal } from '../Context/ModalContext';
import Modal from '../elements/Modal';
import { useAuth } from '../Context/authContext';

const GaleryTemp = () => {

    const [photos]=useObtenerGalery();
    const { modalState, setModal, modalImage, setModalImage, setImage, setDocument, setColl }=useContext(ContextModal);
    const { user }=useAuth();

    const handleClick = (photho)=>{
        setModalImage(true);
        setImage(photho);
    }

    const handleDelete = (id)=>{
        setModal(true);
        setDocument(id);
        setColl('galeria');
    }

    return (  
        <ContainerGalery>
            {
                photos.length > 0 ?
                photos.map((photo)=>{
                    return (
                        <div key={photo.id} className="image">
                            {
                                user ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" onClick={()=>handleDelete(photo.id)} >
                                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                                </svg>:''
                            }
                            <img src={photo.url} alt="" onClick={()=>handleClick(photo.url)} />
                        </div>
                    )
                })
                :<Message><h3>La galeria esta vacía</h3></Message>
            }
            {modalState ? <Modal titulo='la foto' /> : ''}
            {modalImage ? <Modal modalForImage={true} /> : ''}
        </ContainerGalery>
    );
}

const ContainerGalery = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    position: relative;
    svg{
        position: absolute;
        width: 20px;
        height: 20px;
        z-index: 2;
        color: ${theme.blanco};
        margin: 5px;
        padding: 2px;
        border-radius: 20px;
        background: #000;
        &:hover{
            cursor: pointer;
            background: red;
        }
    }
    .image{
        width: 22%;
        height: 120px;
        border-radius: 8px;
        margin-top: 12px;
        overflow: hidden;
        img{
            width: 120%;
            opacity: .7;
        }
        &:hover{
            cursor: pointer;
            img{
                opacity: 1;
            }
        }
    }
`;

const Message = styled.div`
    width: 80%;
    margin: auto;
    color: ${theme.blanco};
    font-size: 30px;
    letter-spacing: 2px;
    text-align: center;
`;

export default GaleryTemp;