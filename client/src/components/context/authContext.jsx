import { createContext, useContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth"
import {auth} from '../../firebase'

export const authContext = createContext()

export const useAuth = ()=>{
    const context =  useContext(authContext)
    return context
}

export function AuthProvider({children}) {

    const [user, setUser] = useState(null)
    
    const signup = (email,password)=> 
    createUserWithEmailAndPassword(auth, email, password)

    const login = (email,password) => 
    signInWithEmailAndPassword(auth, email, password)

    const salir = ()=> signOut(auth)

    const logingWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    const resetPassword = (email)=>{
        sendPasswordResetEmail(auth, email)
    }

    useEffect(()=>{ 
        onAuthStateChanged(auth, currentUser=>{ 
            setUser(currentUser)
        })
    },[])


    return (
        <authContext.Provider value={{signup, login, salir, user, logingWithGoogle, resetPassword}}>{children}</authContext.Provider>
    )
    
}