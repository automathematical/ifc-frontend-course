import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth"
import { Building } from "../../types"
import { Events } from "../../middleware/event-handler"
import { getApp } from "firebase/app"
import { deleteDoc, doc, getFirestore, updateDoc } from "firebase/firestore"

export const databaseHandler = {
    Login: () => {
        const auth = getAuth()
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    },

    Logout: () => {
        const auth = getAuth()
        signOut(auth)
    },

    deleteBuilding: async (building: Building, events: Events) => {
        const id = building.uid
        const dbInstance = getFirestore(getApp())
        await deleteDoc(doc(dbInstance, "buildings", id))
        events.trigger({type: "CLOSE_BUILDING"})
    },

    updataeBuilding: async (building: Building) => {
        const dbInstance = getFirestore(getApp())
        await updateDoc(doc(dbInstance, "buildings", building.uid), {
            ...building,
        })
    }
}