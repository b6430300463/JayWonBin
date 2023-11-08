import { firebase_app } from "./Connect";
import { getFirestore, collection, doc, setDoc,getDoc } from 'firebase/firestore';

const db = getFirestore(firebase_app);
const usersCollection = collection(db, "users");

export const addUser = (user, success, unsuccess) => {
  const userDoc = doc(usersCollection); // Create a new document reference

  // Define the data you want to set in the document
  const userData = {
    username: user.displayName,
    email: user.email,
    status: false,
    // Add other user properties as needed
  };

  setDoc(userDoc, userData) // Set the data in the document
    .then(() => {
      success(user);
    })
    .catch((error) => {
      const msg = `addUser in users collection error: ${error}`;
      console.error(msg);
      unsuccess(msg);
    });
};
export const getUser = (user) => {

}