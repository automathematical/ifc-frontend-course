import { Events } from './event-handler';
import { MapHandler } from "../core/map/map-handler";
import { userAuth } from "../core/user/user-auth";
import { Action } from "./actions";

export const executeCore = (action: Action, events: Events) => {
    if(action.type === "LOGIN") {
        userAuth.Login()
    }
    if(action.type === "LOGOUT") {
        userAuth.Logout()
    }
    if(action.type === "START_MAP") {
        const { container, user } = action.payload
        MapHandler.start(container, user,events)
    }
    if(action.type === "REMOVE_MAP") {
        MapHandler.remove()
    }
    if(action.type === "ADD_BUILDING") {
        MapHandler.addBuilding(action.payload)
    }

}