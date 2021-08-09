import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore } from '../firebase/firebaseConfig';

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('galeria');

        storageRef.put(file).on('state_changed', (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        }, (err) => {
          setError(err);
        }, async () => {
          const url = await storageRef.getDownloadURL();
        
          await collectionRef.add({ url });
          setUrl(url);
          alert('Se agrego una foto');
          
        });
      
      
    }, [file]);

    return { progress, url, error };
}

export default useStorage;