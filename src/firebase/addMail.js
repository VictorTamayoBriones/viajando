import { projectFirestore } from './firebaseConfig';

const addMail = (name, tel, email, message, setName, setTel, setEmail, setMessage) => {
    projectFirestore.collection('mails').add({name, tel, email, message})
    .then(()=>{
        alert('Se mando el mensaje');
        setName('');
        setTel('');
        setEmail('');
        setMessage('');
    }).catch((err)=>{
        alert(err);
    });
}
 
export default addMail;