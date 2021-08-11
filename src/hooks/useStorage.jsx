import { useState, useEffect, useContext } from 'react';
import { projectStorage, projectFirestore } from '../firebase/firebaseConfig';
import { ContextFile } from '../Context/fileContext';

const useStorage = (file, place, categoria, date, description, galery) => {

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const { ready, setReady }=useContext(ContextFile);

    useEffect(() => {
      // references
      const storageRef = projectStorage.ref(file.name);
      if( ready === true ){

        storageRef.put(file).on('state_changed', (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          console.log(percentage);
          setProgress(percentage);
        }, (err) => {
          setError(err);
        }, async () => {
          const url = await storageRef.getDownloadURL();
          
          if( url && place && categoria && date && description ){

            await projectFirestore.collection('viajes').add({ url, place, categoria, date, description});
            setUrl(url);
            alert('Viaje Creado');
            setReady(false);

          }else if( url && place && description ){

            await projectFirestore.collection('ofertas').add({ url, place, description});
            setUrl(url);
            alert('Oferta Creada');
            setReady(false);

          }

        });

      }

      if(galery){

        storageRef.put(file).on('state_changed', (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        }, (err) => {
          setError(err);
        }, async () => {
          const url = await storageRef.getDownloadURL();
          
          if( url ){
            await projectFirestore.collection('galeria').add({ url });
            setUrl(url);
            alert('Se agrego una foto');
          }

        });

      }
      
    }, [file, ready, categoria, date, description, place, setReady]);

    return { progress, url, error };
}

export default useStorage;