import { projectFirestore } from './firebaseConfig'

const deleteDoc = (document, coll) => {
    projectFirestore.collection(coll).doc(document).delete();
}
 
export default deleteDoc;
