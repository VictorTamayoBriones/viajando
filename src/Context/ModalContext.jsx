import React, {useState} from 'react'

const ContextModal = React.createContext();

const ProviderModal = ({children}) => {

    const [modalState, setModal]=useState(false);
    const [modalImage, setModalImage]=useState(false);
    const [image, setImage]=useState(null);
    const [document, setDocument]=useState(null);
    const [coll, setColl]=useState(null);

    return(
        <ContextModal.Provider value={{ 
            modalState: modalState, 
            setModal: setModal, 
            modalImage: modalImage, 
            setModalImage: setModalImage, 
            image: image, 
            setImage: setImage, 
            document: document, 
            setDocument: setDocument,
            coll: coll,
            setColl: setColl
        }} >
            {children}
        </ContextModal.Provider>
    )
}
 
export {ProviderModal, ContextModal};