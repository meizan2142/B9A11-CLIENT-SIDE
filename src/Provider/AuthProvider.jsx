import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)


    // Create User
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign In with google
    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // LogOut
    const logOut = () => {
        setUser(null)
        signOut(auth)
    }

    // Observer
    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            // console.log(user);
            if (currentUser) {
                setUser(currentUser)
            }
        })
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        googleLogIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;