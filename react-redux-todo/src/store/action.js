import { ADD_TODO, REMOVE_TODO, TOGGLE_STATUS } from "./actionType";
import { v4 } from "uuid"

export const addTodo = (value) => ({
    type: ADD_TODO,
    payload: {
        id: v4(),
        "value": value,
        "status": false
    }
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: id
})

export const toggleStatus = (id) => ({
    type: TOGGLE_STATUS,
    payload: id
})
