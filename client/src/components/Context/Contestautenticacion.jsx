import { createContext, useContext } from "react";
import { auth, app } from "../../firebase";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  sendPasswordResetEmail,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { useState, useEffect } from "react";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

export const authContext = createContext();
export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const firestore = getFirestore(app);

  async function getRol(uid) {
    const docRef = doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docRef);
    const infoFinal = docuCifrada.data().user;
    return infoFinal;
  }

  const signup = async (email, password, user) => {
    const infoUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      user
    ).then((usuerioFirebase) => {
      return usuerioFirebase;
    });
    const docuRef = doc(firestore, `usuarios/${infoUser.user.uid}`);
    setDoc(docuRef, { email: email, user });
  };

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const salir = () => signOut(auth);

  const logingWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const resetPassword = (email) => {
    sendPasswordResetEmail(auth, email);
  };

  const logingWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        getRol(currentUser.uid).then((rol) => {
          const userdata = {
            uid: currentUser.uid,
            email: currentUser.email,
            rol: rol,
          };
          setUser(userdata);
        });
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <authContext.Provider
      value={{
        user,
        login,
        signup,
        salir,
        logingWithGoogle,
        logingWithFacebook,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
