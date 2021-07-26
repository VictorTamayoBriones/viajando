import React, {useState} from 'react';

const ContextFile = React.createContext();

const ProviderFile = ({children}) => {

    const [file, setFile]=useState(null);
    const types = ['image/png', 'image/jpeg'];
    const changeHandler = (e)=>{
        let selected = e.target.files[0];

        if(selected && types.includes(selected.type)){
            setFile(selected);
        }else{
            setFile(null);
        }
    }

    return (
        <ContextFile.Provider value={{file:file, setFile:setFile, changeHandler: changeHandler}}>
            {children}
        </ContextFile.Provider>
    );
}
 
export {ProviderFile, ContextFile};