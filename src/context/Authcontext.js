import {useContext,createContext,useEffect,useState} from "react";
import {auth,db} from '../firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth";
import {setDoc,doc} from "firebase/firestore"
const AuthContext = createContext(null);
//All are logic of sign in and sign up would be inside AuthContextProvider function
export function AuthContextProvider({children}){
    const [user,setUser]=useState({});
    /*initially setting user to an empty object*/
    function signUp(email,password){
        createUserWithEmailAndPassword(auth,email,password);
        setDoc(doc(db,'users',email),{
            savedShows: []
        })}
    function logIn(email, password){
        return(
            signInWithEmailAndPassword(auth,email,password)
        )
    }
    function logOut(){
        return(signOut(auth))
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return() => {
            unsubscribe();
        }
    });
    return(
        <AuthContext.Provider value={{signUp,logIn,logOut,user}}>
            {children}
        </AuthContext.Provider>
    )
}
 export function UserAuth(){
    return(useContext(AuthContext));
}
