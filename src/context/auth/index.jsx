import React, { createContext } from "react"
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore"
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth"

export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
  const [userCurrent, setUserCurrent] = React.useState({})
  const [userData, setUserData] = React.useState({})
  const auth = getAuth()
  React.useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (user) => {
      setUserCurrent(user)
    })
    return () => unSuscribe()
  }, [])
  React.useEffect(() => {
    const db = getFirestore()
    const users = collection(db, "users")
    if (userCurrent) {
      const queryUser = query(
        users,
        where("email", "==", `${userCurrent.email}`)
      )
      getDocs(queryUser).then((snapshot) => {
        snapshot.docs.forEach((doc) => {
          setUserData({ ...doc.data() })
        })
      })
    }
  }, [userCurrent])
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(email, password)
  }
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(email, password)
  }
  const logOut = () => {
    return signOut()
  }
  return (
    <AuthContext.Provider
      value={{ signIn, signUp, logOut, userCurrent, userData }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
