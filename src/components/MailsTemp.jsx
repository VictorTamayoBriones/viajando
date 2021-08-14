import React, {useContext} from 'react'
import styled from 'styled-components';
import useObtenerMails from '../hooks/useObtenerMails';
import theme from '../theme';
import Modal from '../elements/Modal';
import { ContextModal } from '../Context/ModalContext';

const MailsTemp = () => {

    const [mails]=useObtenerMails();
    const { modalState, setModal, setDocument, setColl } = useContext(ContextModal);

    const handleDelete = (id)=>{
        setModal(true);
        setDocument(id);
        setColl('mails');
    }

    return (
        <ContainerMails>
            {
                mails.length > 0 ?
                    mails.map((mail)=>{
                        return (
                            <Mail key={mail.id}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" onClick={()=>handleDelete(mail.id)} >
                                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                                </svg>
                                <p>De: {mail.name}</p>
                                <p>Tel: {mail.tel}</p>
                                <Message>
                                    <p>{mail.message}</p>
                                </Message>
                            </Mail>
                        );
                    })
                : <Err>No hay mensajes</Err>
            }
            {
                modalState ? <Modal titulo='el mensaje' /> : ''
            } 
        </ContainerMails>
    );
}

const ContainerMails = styled.div`
    width: 90%;
    margin: auto;
    height: 100vh;
    display: flex;
    justify-content: center;
    gap: 22px;
`;

const Mail = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 250px;
    background: ${theme.naranja};
    height: max-content;
    color: ${theme.grisOscuro};
    padding: 8px;
    border-radius: 8px;
    box-shadow: 0px 0px 18px ${theme.sombra};
    svg{
        position: absolute;
        align-self: flex-end;
        width: 20px;
        height: 20px;
        z-index: 2;
        color: ${theme.blanco};
        margin: 0px;
        padding: 2px;
        border-radius: 20px;
        background: #000;
        &:hover{
            cursor: pointer;
            background: red;
        }
    }
`;

const Message = styled.div`
    width: 100%;
    margin-top: 10px;
    padding-top: 5px;
    border-top: solid 1px ${theme.crema};
`;

const Err = styled.div`
    width: 80%;
    margin: auto;
    color: ${theme.blanco};
    font-size: 30px;
    letter-spacing: 2px;
    text-align: center;
`;

export default MailsTemp;