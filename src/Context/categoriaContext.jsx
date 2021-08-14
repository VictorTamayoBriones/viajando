import React, {useState} from 'react';

const ContextCategoria = React.createContext();

const ProviderCategoria = ({children})=>{
    const [categoria, selectedCategoria]=useState(null);
    const [categoriaHome, setCategoriaHome]=useState(null);

    return(
        <ContextCategoria.Provider value={{categoria: categoria, selectedCategoria: selectedCategoria, categoriaHome: categoriaHome, setCategoriaHome: setCategoriaHome}} >
            {children}
        </ContextCategoria.Provider>
    )
}

export {ContextCategoria, ProviderCategoria};