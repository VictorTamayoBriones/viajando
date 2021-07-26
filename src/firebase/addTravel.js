import {projectFirestore} from '../firebase/firebaseConfig';

const addTravel = ({place, categoria, url, date, description})=>{
    return projectFirestore.collection('viajes').add({
        lugar: place,
        categoria: categoria,
        photo: url,
        fecha: date,
        description: description
    })
}

export default addTravel;