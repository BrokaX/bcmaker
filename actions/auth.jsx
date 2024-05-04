// import { SignupFormSchema } from '../lib/definisions';
import { auth, db } from '@/firebase/firebase';
import { Timestamp,doc, setDoc, collection, addDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  getAuth,
  signOut,
} from 'firebase/auth';

// Create account
export const signup = async (formData) => {
  try {
    const { email, password } = formData;
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Update the Profile
    await updateProfile(user, {
      displayName: 'name',
      photoURL:
        'https://firebasestorage.googleapis.com/v0/b/bcm2-a4631.appspot.com/o/App-Logo.png?alt=media&token=0c9348a2-88d2-4257-b84c-69f333c02187',
    });
    
    // Create user document under the 'users' collection
    await setDoc(doc(db, 'users', user.uid),{
      userName: null,
      phone: null,
      bio: null,
      location: null,
      addFields:{},
      cards:{}
  });

  } catch (error) {
    throw new Error(error.message);
  }
};

// Login
export const login = async (formData) => {
  const { email, password } = formData;
  try {
   return signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    throw new Error(error.message);
  }
};

//Logout
export const logout = async () => {
  const auth = getAuth();
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error);
  }
};
