import React, {useState, useContext} from 'react'
import { ContextCategoria } from './categoriaContext';

const ContextForms = React.createContext();

const ProviderForms = ({children}) => {

    const [place, setPlace]=useState('');
    const { categoria, selectedCategoria }=useContext(ContextCategoria);
    /*const { file, setFile, ready, setReady }=useContext(ContextFile);*/
    const [date, changeDate]=useState(new Date());
    const [description, setDescription]=useState('');

    return (  
        <ContextForms.Provider value={{ 
            place: place,
            setPlace: setPlace,
            categoria: categoria,
            selectedCategoria: selectedCategoria,


            
            date: date,
            changeDate: changeDate,
            description: description,
            setDescription: setDescription
        }} >
            {children}
        </ContextForms.Provider>
    );
}
 
export {ProviderForms, ContextForms};