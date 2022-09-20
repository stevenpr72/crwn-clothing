import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDCa1l20Q13DwFjODNFxHZnBY_JEgHOCUM",
    authDomain: "crwn-db-e3417.firebaseapp.com",
    projectId: "crwn-db-e3417",
    storageBucket: "crwn-db-e3417.appspot.com",
    messagingSenderId: "382512304267",
    appId: "1:382512304267:web:0c832b6622d1155427448e"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshop = await getDoc(userDocRef);
    console.log(userSnapshop);

    if (!userSnapshop.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch(error) {
            console.log('error creating the user', error.message);
        }
    }
} 