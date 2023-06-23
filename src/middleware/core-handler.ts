import { MapHandler } from "../core/map/map-handler";
import { userAuth } from "../core/user/user-auth";
import { Action } from "./actions";

export const executeCore = (action: Action) => {
    if(action.type === "LOGIN") {
        userAuth.Login()
    }
    if(action.type === "LOGOUT") {
        userAuth.Logout()
    }
    if(action.type === "START_MAP") {
        MapHandler.start(action.payload)
    }
    if(action.type === "REMOVE_MAP") {
        MapHandler.remove()
    }
}