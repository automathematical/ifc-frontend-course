import { Events } from './event-handler';
import { MapHandler } from "../core/map/map-handler";
import { databaseHandler } from "../core/db/db-handler";
import { Action } from "./actions";

export const executeCore = (action: Action, events: Events) => {
    if(action.type === "LOGIN") {
        databaseHandler.Login()
    }
    if(action.type === "LOGOUT") {
        databaseHandler.Logout()
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
    if(action.type === "DELETE_BUILDING") {
        databaseHandler.deleteBuilding(action.payload, events)
    }
    if(action.type === "UPDATE_BUILDING") {
        databaseHandler.updateBuilding(action.payload)
    }
    if(action.type === "UPLOAD_MODEL") {
        const {model, file, building } = action.payload
        databaseHandler.uploadModel(model, file, building, events)
    }
    if(action.type === "DELETE_MODEL") {
        const { model, building } = action.payload
        databaseHandler.deleteModel(model, building, events)
    }
}