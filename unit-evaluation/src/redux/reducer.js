import { SET_BOOKS } from "./actionType";
import { initialState } from "./initialState";

export const reducer = (store = initialState, {type, payload}) => {
    switch(type) {
        case SET_BOOKS: {
            return {
                ...store,
                books: payload
            }
        }
        default: {
            return store
        }
    }
}