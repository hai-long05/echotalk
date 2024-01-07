import { User, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

type AuthContextProps = {
  children: React.ReactNode
}

type AuthContextValue = {
  signUp: (email: string, password: string) => void
  logIn: (email: string, password: string) => void
  logOut: () => Promise<void>
  currentUser: User | null
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const useAuth = () => {
  return useContext(AuthContext);
}

const AuthProvider: React.FC<AuthContextProps> = ({children}) => {

  const [loading, setLoading] = useState<boolean>(true);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  }
  
  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false)
      if (user) {
        setCurrentUser(user);
      }
    });

    return unsubscribe
  }, [])

  const value = {
    signUp,
    logIn,
    logOut,
    currentUser
  }

  return (
    <AuthContext.Provider value={value}>
      { !loading && children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;