import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/firebaseConfig'

const useObtenerGalery = () => {
    
    const [photos, setPhotos]=useState([]);

    useEffect(()=>{
        const unsuscribe = projectFirestore.collection('galeria')
        .onSnapshot((snapshot)=>{

            setPhotos(snapshot.docs.map((photo)=>{
                return{...photo.data(), id: photo.id}
            }));

        });
        return unsuscribe;
    }, []);
    return[photos];
}
 
export default useObtenerGalery;