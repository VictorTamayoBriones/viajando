import React, {useState} from 'react'

const ContextFile = React.createContext();

const ProviderFile = ({children})=>{

    const types = ['image/png', 'image/jpeg'];
    const [file, setFile]=useState(null);
    const [ready, setReady]=useState(false);

    const handleChange = (e)=>{
        let selected = e.target.files[0];
        console.log(selected);
        if( selected && types.includes(selected.type)){
            setFile(selected);
        }else{
            alert('Usa un archivo PNG o JPEG');
            setFile(null);
        }

    }

    return(
        <ContextFile.Provider value={{ file: file, setFile: setFile, handleChange: handleChange, ready: ready, setReady: setReady }} >
            {children}
        </ContextFile.Provider>
    )

}

export { ContextFile, ProviderFile };