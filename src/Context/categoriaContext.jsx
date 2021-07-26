import React, {useState} from 'react';

const ContextCategoria = React.createContext();

const ProviderCategoria = ({children})=>{
    const [categoria, selectedCategoria]=useState(null);

    return(
        <ContextCategoria.Provider value={{categoria: categoria, selectedCategoria: selectedCategoria}} >
            {children}
        </ContextCategoria.Provider>
    )
}

export {ContextCategoria, ProviderCategoria};