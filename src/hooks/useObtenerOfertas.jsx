import {useState, useEffect} from 'react'
import { projectFirestore } from '../firebase/firebaseConfig';

const useObtenerOfertas = () => {
    
    const [ofertas, setOfertas]=useState([]);

    useEffect(()=>{
        const unsuscribe = projectFirestore.collection('ofertas')
        .onSnapshot((snapshot)=>{

            setOfertas(snapshot.docs.map((oferta)=>{
                return{...oferta.data(), id: oferta.id}
            }));

        })
        
        return unsuscribe;
        
    }, []);

    return [ofertas];
}
 
export default useObtenerOfertas;