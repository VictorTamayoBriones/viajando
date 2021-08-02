import {useState, useEffect, useContext} from 'react';
import {projectStorage, projectFirestore} from '../firebase/firebaseConfig';
import {ContextFile} from '../Context/fileContext';

const useStorage = () => {

    const {file}=useContext(ContextFile);
    const [progress, setProgress]=useState(0);
    const [url, setUrl]=useState(null);
    const [error, setError]=useState(null);

    /*
    useEffect(()=>{

        const storageRef = projectStorage.ref(file);
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap)=>{

            let percentage = (snap.bytesTransferred / snap.totalBytes) * 1000;
            setProgress(percentage);

        }), (err)=>{
            setError(err);
        }, async ()=>{
            const url = await storageRef.getDownloadURL();
            collectionRef.add({url});
            setUrl(url);
        }

    }, [file])
    */
    return { progress, url, error }
}
 
export default useStorage;