import React, {useState, useEffect} from 'react'
import { projectFirestore } from '../firebase/firebaseConfig';

const useObtenerOfertas = () => {
    
    const [ofertas, setOfertas]=useState([]);
    const [ultimaOferta, setUltimaOferta]=useState(null);

    useEffect(()=>{
        const unsuscribe = projectFirestore.collection('ofertas')
        .onSnapshot((snapshot)=>{

            if( snapshot.docs.length > 0 ){
                setUltimaOferta(snapshot.docs[snapshot.docs.length -1]);
            }

            setOfertas(snapshot.docs.map((oferta)=>{
                return{...oferta.data(), id: oferta.id}
            }));

        })
        
        return unsuscribe;
        
    }, []);

    return [ofertas];
}
 
export default useObtenerOfertas;