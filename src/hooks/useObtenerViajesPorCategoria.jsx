import React, {useState, useContext, useEffect} from 'react'
import { projectFirestore } from '../firebase/firebaseConfig';
import { ContextCategoria } from '../Context/categoriaContext';

const useObtenerViajesPorCategoria = () => {
    const [viajesCategoria, setViajesCategoria]=useState([]);
    const { categoriaHome, setCategoriaHome }=useContext(ContextCategoria);

    useEffect(()=>{
        const unsuscribe = projectFirestore.collection('viajes')
        .where('categoria', '==', categoriaHome)
        .orderBy('date', 'desc')
        .onSnapshot((snapshot)=>{
            setViajesCategoria(snapshot.docs.map((viaje)=>{
                return {...viaje.data(), id: viaje.id}
            }));
        });
        return unsuscribe;
    }, []);
    return [viajesCategoria]
}
 
export default useObtenerViajesPorCategoria;