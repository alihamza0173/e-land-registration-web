import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore, collection, getDocs} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDaeaH0zc8rVJJiBgEVJppr48g1vn0i9eU",
    authDomain: "land-registeration.firebaseapp.com",
    projectId: "land-registeration",
    storageBucket: "land-registeration.appspot.com",
    messagingSenderId: "133260318736",
    appId: "1:133260318736:web:a6ca01b16bdc7f77cd5295",
    measurementId: "G-X0FTMYRTN3"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const landCollection = collection(db, 'lands');

getDocs(landCollection).then((snapshot) => {
    snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
    });
}).catch((error) => {{console.error(error)}});
