import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const getCollection = (collectionName = 'lands')=>{
    const auth = getAuth(window.config.firebaseApp);
    const db = getFirestore(window.config.firebaseApp);
    const landCollection = collection(db, collectionName);
    getDocs(landCollection).then((snapshot) => {
        snapshot.forEach((doc) => {
            console.log(doc.id, '=>', doc.data());
        });
    }).catch((error) => { { console.error(error) } });
}