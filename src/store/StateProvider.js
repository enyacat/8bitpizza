import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
// import {
//   signInWithEmailAndPassword,
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../components/firebase";

//for cart
export const StateContextReducer = createContext();

export const StateReducerProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContextReducer.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContextReducer.Provider>
  );
};
export const useStateValue = () => useContext(StateContextReducer);

//for state
export const StateContext = createContext();

// export const StateProvider = ({ state, children }) => {
//   return (
//     <StateContext.Provider value={state}>{children}</StateContext.Provider>
//   );
// };

//for Firebase

// const userAuthContext = createContext();

// export const UserAuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState("");
//   const signUp = (email, password) => {
//     return createUserWithEmailAndPassword(auth, email, password);
//   };
//   const logIn = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };
//   const logOut = () => {
//     return signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <userAuthContext.Provider value={{ user, signUp, logIn, logOut }}>
//       {children}
//     </userAuthContext.Provider>
//   );
// };

// export const useUserAuth = () => useContext(userAuthContext);
