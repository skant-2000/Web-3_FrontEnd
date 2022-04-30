import { ADD_TODO, REMOVE_TODO, TOGGLE_STATUS } from "./actionType";
import { initialState } from "./initialState";

export const reducer = (store = initialState, {type, payload}) => {
    switch(type) {
        case ADD_TODO: {
            return {
                ...store,
                todo: [...store.todo, payload]
            }
        }
        case REMOVE_TODO: {
            return {
                ...store,
                todo: store.todo.filter(item => item.id !== payload)
            }
        }
        case TOGGLE_STATUS: {
            return {
                ...store,
                todo: store.todo.map(item => item.id === payload ? {...item, status: !item.status} : item)
            }
        }
        default: {
            return store
        }
    }
}