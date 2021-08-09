import { useState, useEffect, useContext } from 'react';
import { projectStorage, projectFirestore } from '../firebase/firebaseConfig';
import { ContextFile } from '../Context/fileContext';

const useStorage = (file, place, categoria, date, description) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const { ready, setReady }=useContext(ContextFile);

    useEffect(() => {
      // references
      const storageRef = projectStorage.ref(file.name);
      const collectionRef = projectFirestore.collection('viajes');

      if( ready === true ){

        storageRef.put(file).on('state_changed', (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        }, (err) => {
          setError(err);
        }, async () => {
          const url = await storageRef.getDownloadURL();
          
          if( url && place && categoria && date && description ){
            await collectionRef.add({ url, place, categoria, date, description});
            setUrl(url);
            alert('Viaje Creado');
            setReady(false);
          }
        });
      }
      
    }, [file, ready, categoria, date, description, place, setReady]);

    return { progress, url, error };
}

export default useStorage;