import {  getAuth,createUserWithEmailAndPassword,
    signOut,signInWithEmailAndPassword,
    updateProfile,updatePassword,
    sendPasswordResetEmail
} from 'firebase/auth'
import { firebase_auth } from "./Connect";
import { addUser } from './UserModel';

export const signUpEmailPass = (profile,success,unsuccess) => {
    createUserWithEmailAndPassword(firebase_auth, profile.email, profile.password)
        .then((userCredential) => {
            const user = userCredential.user//ใช้usercredentialเลยไม่ได้ต้องทำตามนี้
            //Update profile and addUser in collection
            updateUserProfile(profile)
            addUser(user,success,unsuccess)
        })
        .catch((error) => { 
            const msg = `signUpEmailPass error: ${error}`
            console.error(msg)
            unsuccess(msg)
        })
}
export const updateUserProfile = (profile) => {
    const fullname = profile.firstname + " " + profile.lastname
    updateProfile(auth.currentUser, {
        displayName: fullname
    })
        .then(() => {
            console.log(`updateUserProfile successfully`)
        })
        .catch((error) => {
            const msg = `updateUserProfile error: ${error}`
            console.error(msg)
            unsuccess(msg)
        })
}
export const signInEmailPass = (email,password,success,unsuccess) => {
    signInWithEmailAndPassword(firebase_auth,email,password)
    .then((userCredential) => {
      const user = userCredential.user
      success(user)
    })
    .catch((error) => {
      const msg = `signInEmailPass error: ${error}`
      console.error(msg)
      unsuccess(msg)
    })
  }
export const logout = (success, unsuccess) => {
    signOut(firebase_auth)
        .then(() => {
            console.log(`Logged out`)
            success()
        })
        .catch((error) => {
            const msg = `Logout error: ${error}`
            console.error(msg)
            unsuccess(msg)
        })
}