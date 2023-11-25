import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const getCollection = async (collectionName = 'lands') => {
    const auth = getAuth(window.config.firebaseApp);
    const db = getFirestore(window.config.firebaseApp);
    const landCollection = collection(db, collectionName);
    // snapshot.forEach((doc) => {
    //     console.log(doc.id, '=>', doc.data());

    // });

    return await getDocs(landCollection).then((snapshot) => {
        console.log(snapshot);
        return snapshot.docs.map((doc) => {
            return {
                data: doc.data()
            }
        });
    }).catch((error) => { { console.error(error) } });
}

export { getCollection };