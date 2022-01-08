import { getAuth, signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged,createUserWithEmailAndPassword} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();
// s
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signinUsingGoogle = () =>{
        setIsLoading(true)
       return signInWithPopup(auth, provider);
        
    };

    const logout = () =>{
        setIsLoading(true)
        signOut(auth)
        .then(() =>{
            setUser({})
        })
        .finally(()=> setIsLoading(false))
    };

    useEffect( () =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            }
            setIsLoading(false);
          });
    },[]);

    return{
        user,
        isLoading,
        signinUsingGoogle,
        logout,
        setIsLoading
    }
}

export default useFirebase;