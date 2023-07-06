import { State } from './state'
import { Action } from './actions'

export const reducer = (state: State, action: Action) => {
    if (action.type === "UPDATE_USER") {
        return { ...state, user: action.payload }
    }
    if (action.type === "OPEN_BUILDING" || action.type === "UPDATE_BUILDING") {
        return { ...state, building: action.payload }
    }
    if (action.type === "CLOSE_BUILDING") {
        return { ...state, building: null }
    }
    if (action.type === "UPDATE_FLOORPLAN") {
        return { ...state, floorplan: action.payload }
    }
    return { ...state }
}