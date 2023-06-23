import { userAuth } from "../core/user-auth";
import { Action } from "./actions";

export const executeCore = (action: Action) => {
    if(action.type === "LOGIN") {
        userAuth.Login()
    }
    if(action.type === "LOGOUT") {
        userAuth.Logout()
    }
}