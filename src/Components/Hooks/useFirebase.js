import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "@firebase/auth";
import React, { useEffect, useState } from "react";
import FirebaseInit from "../Firebase/FirebaseInit";

FirebaseInit();

const useFirebase = () => {
  const [User, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const Provider = new GoogleAuthProvider();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const SignInWithGoogle = () => {
    return signInWithPopup(auth, Provider);
  };
  const EmailAndPasswordSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const CreateAccountWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  return {
    auth,
    User,
    isLoading,
    setUser,
    setIsLoading,
    EmailAndPasswordSignIn,
    SignInWithGoogle,
    CreateAccountWithEmailAndPassword,
  };
};

export default useFirebase;
