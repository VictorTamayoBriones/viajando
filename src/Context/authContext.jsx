import React, {useContext, useEffect, useState} from 'react'
import { projectAuth } from '../firebase/firebaseConfig';

const AuthContext = React.createContext();

//Hook para acceder al contetxo
const useAuth = ()=>{
    return useContext(AuthContext);
}

const ProviderAuth = ({children})=>{

    const [user, changeuser]=useState();

    //Estado paars aber cuando termino de cargar la comprobación
    const [loading, changeLoading]=useState(true);

    //Efecto para hacer la comprobación solo una vez
    useEffect(()=>{
        //Comprobamos si hay un usuario
        const cancelSuscribe = projectAuth.onAuthStateChanged((user)=>{
            changeuser(user);
            changeLoading(false);
        });

        return cancelSuscribe;
    }, []);

    //!loading && children
    return (
        <AuthContext.Provider value={{user: user}} >
            {!loading && children}
        </AuthContext.Provider>
    );

}

export { ProviderAuth, AuthContext, useAuth };