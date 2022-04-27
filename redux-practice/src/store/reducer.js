import { DECREMENT_BY_ONE, DECREMENT_BY_X, DIVIDE_BY_X, INCREMENT_BY_ONE, INCREMENT_BY_X, MULTIPLY_BY_X } from "./actionType";
import { initialState } from "./initialState";

export const reducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case INCREMENT_BY_ONE: {
            return {
                ...store,
                count: store.count + payload
            }
        }
        case DECREMENT_BY_ONE: {
            return {
                ...store,
                count: store.count - payload
            }
        }
        case INCREMENT_BY_X: {
            return {
                ...store,
                count: store.count + payload
            }
        }
        case DECREMENT_BY_X: {
            return {
                ...store,
                count: store.count - payload
            }
        }
        case MULTIPLY_BY_X: {
            return {
                ...store,
                count: store.count * payload
            }
        }
        case DIVIDE_BY_X: {
            return {
                ...store,
                count: store.count / payload
            }
        }
        default: {
            return store
        }
    }
}