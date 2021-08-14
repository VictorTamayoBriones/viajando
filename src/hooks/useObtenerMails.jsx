import { useState, useEffect } from 'react'
import { projectFirestore } from '../firebase/firebaseConfig'

const useObtenerMails = () => {
    
    const [mails, setMails]=useState([]);

    useEffect(()=>{
        const unsuscribe = projectFirestore.collection('mails')
        .onSnapshot((snapshot)=>{

            setMails(snapshot.docs.map((mail)=>{
                return{...mail.data(), id: mail.id}
            }));

        });
        return unsuscribe;
    }, []);
    return[mails];
}
 
export default useObtenerMails;