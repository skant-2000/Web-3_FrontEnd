import { SET_TODO } from "./actionType";
import { initialState } from "./initialState";

export const reducer = (store = initialState, {type, payload}) => {
    switch(type) {
        case SET_TODO: {
            return {
                todos: payload
            }
        }
        default: {
            return store
        }
    }
}