import { Events } from './../../middleware/event-handler';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth"
import { Building, Model } from "../../types"
import { getApp } from "firebase/app"
import { deleteDoc, doc, getFirestore, updateDoc } from "firebase/firestore"
import { deleteObject, getStorage, ref, uploadBytes } from 'firebase/storage'
import { buildingHandler } from '../building/building-handler';

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
        const dbInstance = getFirestore(getApp())
        await deleteDoc(doc(dbInstance, "buildings", building.uid))
        const storageInstance = getStorage(getApp())
        const ids: string[] = []
        for (const model of building.models) {
            const fileRef = ref(storageInstance, model.id)
            await deleteObject(fileRef)
            ids.push(model.id)
        }
        await buildingHandler.deleteModels(ids)
        events.trigger({ type: "CLOSE_BUILDING" })
    },

    updateBuilding: async (building: Building) => {
        const dbInstance = getFirestore(getApp())
        await updateDoc(doc(dbInstance, "buildings", building.uid), {
            ...building,
        })
    },

    uploadModel: async (model: Model, file: File, building: Building, events: Events) => {
        const appInstance = getApp()
        const storageInstance = getStorage(appInstance)
        const fileRef = ref(storageInstance, model.id)
        await uploadBytes(fileRef, file)
        await buildingHandler.refreshModels(building, events)
        events.trigger({ type: "UPDATE_BUILDING", payload: building })
    },

    deleteModel: async (model: Model, building: Building, events: Events) => {
        const storageInstance = getStorage(getApp());
        const fileRef = ref(storageInstance, model.id);
        await deleteObject(fileRef);
        await buildingHandler.deleteModels([model.id])
        await buildingHandler.refreshModels(building, events)
        events.trigger({ type: "UPDATE_BUILDING", payload: building });
    },
}