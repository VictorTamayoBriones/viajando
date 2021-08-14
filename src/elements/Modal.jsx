import React, {useContext} from 'react'
import styled from 'styled-components';
import theme from '../theme';
import { ContextModal } from '../Context/ModalContext';
import deleteDoc from '../firebase/deleteDocument';

const Modal = ({ titulo, modalForImage }) => {

    const {setModal, setModalImage, image, document, coll, setDocument, setColl}=useContext(ContextModal);

    const handleDelete = ()=>{
        deleteDoc(document, coll);
        setModal(false);
        setDocument(null);
        setColl(null);
    }

    return (
        <ContainerModal>
            <ModalComponent modalForImage >
                {
                    modalForImage ? '' :
                    <ModalHeader>
                        <p>¿Esta seguro de borrar {titulo}?</p>
                    </ModalHeader>
                }
                <ModalBody>
                    {
                        modalForImage ?
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" onClick={()=>setModalImage(false)} >
                                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                                </svg>
                                <img src={image} />
                            </>                            
                        :
                        <ContainerBtn>
                            <Btn action='delete' onClick={handleDelete} >Eliminar</Btn>
                            <Btn action='cancel' onClick={()=>setModal(false)} >Cancelar</Btn>
                        </ContainerBtn>
                    }
                </ModalBody>
            </ModalComponent>
        </ContainerModal>
    );
}

const ContainerModal = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: rgba(0, 0, 0, 0.7);
`;

const ModalComponent = styled.div`
    width: ${(props)=>{
        if(props.modalForImage === true){
            return '70%'
        }else{
            return '60%'
        }
    }};
    max-height: 90vh;
    margin: auto;
    border-radius: 8px;
    overflow: hidden;
    color: ${theme.blanco};
    background: ${theme.grisOscuro};
    box-shadow: 0px 0px 15px ${theme.sombra};
    @media (max-width: 900px){
        transform: translateY(-290px);
        width: 100%;
    }
`;

const ModalHeader=styled.div`
    width: 100%;
    text-align: center;
    padding: 5px;
    font-size: 22px;
    letter-spacing: 1.3px;
    color: ${theme.naranja};
    border-bottom: solid 1px ${theme.grisClaro};
`;

const ModalBody = styled.div`
    width: 100%;
    height: max-content;
    padding: 12px;
    overflow: hidden;
    img{
        width: 100%;
    }
`;

const ContainerBtn = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const Btn = styled.button`
    width: 48%;
    font-size: 16px;
    padding: 4px;
    border-radius: 8px;
    background: transparent;
    border: solid 1px ${(props)=>{
        if( props.action === 'delete' ){
            return theme.rojo
        }else if( props.action === 'cancel' ){
            return theme.verde
        }
    }};
    color: ${(props)=>{
        if( props.action === 'delete' ){
            return theme.rojo
        }else if( props.action === 'cancel' ){
            return theme.verde
        }
    }};
    &:hover{
        cursor: pointer;
        background: ${(props)=>{
            if( props.action === 'delete' ){
                return theme.rojo
            }else if( props.action === 'cancel' ){
                return theme.verde
            }  
        }};
        color: ${theme.blanco};
    }
`;

export default Modal;