import React, {useState, useEffect} from 'react'
import { projectFirestore } from '../firebase/firebaseConfig';

const useObtnerViajes = () => {

    const [viajes, setViajes]=useState([]);
    const [ultimoViaje, setUltimoViaje]=useState(null);

    useEffect(()=>{
        const unsuscribe = projectFirestore.collection('viajes').orderBy('date', 'desc').limit(10)
        .onSnapshot((snapshot)=>{

            if( snapshot.docs.length > 0 ){
                setUltimoViaje(snapshot.docs[snapshot.docs.length -1]);
            }

            setViajes(snapshot.docs.map((viaje)=>{
                return{...viaje.data(), id: viaje.id}
            }));

        })
        return unsuscribe
    }, []);
    
    return [viajes];
}
 
export default useObtnerViajes;