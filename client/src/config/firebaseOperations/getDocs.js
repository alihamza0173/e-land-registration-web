import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const getCollection = async (collectionName = "lands") => {
  const auth = getAuth(window.config.firebaseApp);
  const db = getFirestore(window.config.firebaseApp);
  const landCollection = collection(db, collectionName);
  // snapshot.forEach((doc) => {
  //     console.log(doc.id, '=>', doc.data());

  // });

  return await getDocs(landCollection)
    .then((snapshot) => {
      console.log(snapshot);
      return snapshot.docs.map((doc) => {
        return {
          data: doc.data(),
        };
      });
    })
    .catch((error) => {
      {
        console.error(error);
      }
    });
};

const updateCollection = async (collectionName = "lands", id, data) => {
  try {
    const auth = getAuth(window.config.firebaseApp);
    const firestore = getFirestore(window.config.firebaseApp);
    const docRef = doc(firestore, `${collectionName}/${id}`);
    return await setDoc(docRef, data, { merge: true });
    // console.log("resposne after adding", res);
  } catch (e) {
    // console.log("error while registering user", e);
    return e;
  }
};

export { getCollection, updateCollection };
