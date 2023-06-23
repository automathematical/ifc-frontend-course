import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth"

export const userAuth = {
    Login: () => {
        const auth = getAuth()
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    },
    Logout: () => {
        const auth = getAuth()
        signOut(auth)
    }
}