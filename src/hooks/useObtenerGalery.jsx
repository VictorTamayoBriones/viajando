import React, { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/firebaseConfig'

const useObtenerGalery = () => {
    
    const [photos, setPhotos]=useState([]);
    const [ultimaphoto, setUltimaPhoto]=useState(null);

    useEffect(()=>{
        const unsuscribe = projectFirestore.collection('galeria')
        .onSnapshot((snapshot)=>{

            if( snapshot.docs.length > 0 ){
                setUltimaPhoto(snapshot.docs[snapshot.docs.length -1]);
            }

            setPhotos(snapshot.docs.map((photo)=>{
                return{...photo.data(), id: photo.id}
            }));

        });
        return unsuscribe;
    }, []);
    return[photos];
}
 
export default useObtenerGalery;