import {useState, useEffect} from 'react'
import { projectFirestore } from '../firebase/firebaseConfig';

const useObtnerViajes = () => {

    const [viajes, setViajes]=useState([]);

    useEffect(()=>{
        const unsuscribe = projectFirestore.collection('viajes').orderBy('date', 'desc').limit(10)
        .onSnapshot((snapshot)=>{
            
            setViajes(snapshot.docs.map((viaje)=>{
                return{...viaje.data(), id: viaje.id}
            }));

        })
        return unsuscribe
    }, []);
    
    return [viajes];
}
 
export default useObtnerViajes;