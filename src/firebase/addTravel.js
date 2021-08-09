
import {projectFirestore, projectStorage} from './firebaseConfig';
import React, {useContext} from 'react';
import { ContextFile } from '../Context/fileContext';

const AddTravel = ({ place, categoria, date, description }) => {

    const { file } = useContext(ContextFile);

    return (
        
        projectStorage.ref(file.name).put(file).on('state_changed', (snap)=>{
    
        }, async ()=>{
            const url = await projectStorage.ref(file.name).getDownloadURL();
            await projectFirestore.collection('viajes').add({
                lugra: place,
                categoria: categoria,
                photo: url,
                fecha: date,
                descripcion: description        
            })
        })
        
    );
}

export default AddTravel;